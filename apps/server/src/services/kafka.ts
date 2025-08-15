import { Kafka } from "kafkajs";
import { TOPIC } from "../consts/topic";
import logger from "./logger";

function initKafkaProducer() {
  const kafka = new Kafka({
    clientId: "pubsub-prototype",
    brokers: ["kafka1:9092", "kafka2:9092"],
  });

  const producer = kafka.producer();

  logger.log("Kafka producer initialized...");

  return producer;
}

export async function sendMessage(message: string) {
  try {
    await producer.send({
      topic: TOPIC,
      messages: [
        {
          value: message,
        },
      ],
    });
  } catch (err) {
    logger.error(`Error sending message: ${err}`);
  }
}

const producer = initKafkaProducer();

export default producer;
