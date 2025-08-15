package env

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Environment struct {
	Environment string
	Port        string
	KafkaPort   string
	KafkaHost   string
}

var env Environment

func Init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	env.Environment = os.Getenv("APP_ENVIRONMENT")
	env.Port = fmt.Sprintf(":%s", os.Getenv("PORT"))
	env.KafkaPort = fmt.Sprintf(":%s", os.Getenv("KAFKA_PORT"))
	env.KafkaHost = os.Getenv("KAFKA_HOST")

}

func GetEnv() Environment {
	return env
}
