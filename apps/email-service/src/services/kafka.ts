import { Kafka } from "kafkajs";
import logger from "./logger";
import { sendMail } from "../core/email";

function initKafkaConsumer() {
  const kafka = new Kafka({
    clientId: "pubsub-prototype",
    brokers: ["kafka1:9092", "kafka2:9092"],
  });

  const consumer = kafka.consumer({ groupId: "test-group" });

  logger.log("Kafka consumer intialized...");

  return consumer;
}

export async function connectAndSubscribeConsumer(topic: string) {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
  } catch (err) {
    logger.error(`Error connecting to kafka: ${err}`);
  }
}

export async function runConsumer() {
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      sendMail();
      logger.log({
        value: message.value?.toString(),
        topic,
        partition,
      });
    },
  });
}

const consumer = initKafkaConsumer();

export default consumer;
