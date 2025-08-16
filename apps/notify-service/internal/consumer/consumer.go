package consumer

import (
	"fmt"
	"notify-service/internal/consts"
	"notify-service/internal/notify"
	"time"

	"github.com/confluentinc/confluent-kafka-go/v2/kafka"
)

func Init() {
	c, err := kafka.NewConsumer(&kafka.ConfigMap{
		"bootstrap.servers": "localhost:29092",
		"group.id":          "test-group-3",
		"auto.offset.reset": "earliest",
	})

	if err != nil {
		panic(err)
	}

	err = c.SubscribeTopics([]string{consts.TOPIC}, nil)

	if err != nil {
		panic(err)
	}

	// A signal handler or similar could be used to set this to false to break the loop.
	run := true

	for run {
		msg, err := c.ReadMessage(time.Second)
		if err == nil {
			notify.Notify(string(msg.Value))
			fmt.Printf("Message on %s: %s\n", msg.TopicPartition, string(msg.Value))
		} else if !err.(kafka.Error).IsTimeout() {
			// The client will automatically try to recover from all errors.
			// Timeout is not considered an error because it is raised by
			// ReadMessage in absence of messages.
			fmt.Printf("Consumer error: %v (%v)\n", err, msg)
		}
	}

	c.Close()

}
