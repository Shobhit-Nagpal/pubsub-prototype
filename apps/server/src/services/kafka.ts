import { Kafka } from "kafkajs";
import { TOPIC } from "../consts/topic";
import logger from "./logger";

const kafka = new Kafka({
  clientId: "pubsub-prototype",
  brokers: ["localhost:29092", "localhost:39092"],
});

function initKafkaProducer() {
  const producer = kafka.producer();

  logger.log("Kafka producer initialized...");

  producer.connect();

  return producer;
}

export async function createTopic() {
  try {
    const admin = kafka.admin();
    await admin.connect();

    await admin.createTopics({
      topics: [
        {
          topic: TOPIC,
          numPartitions: 1,
          replicationFactor: 1,
        },
      ],
    });

    await admin.disconnect();
  } catch (err) {
    logger.error(`Failed to create Kafka topic: ${err}`);
  }
}

export async function connectProducer() {
  try {
    await createTopic();
    await producer.connect();
    logger.log("Producer connected to Kafka");
  } catch (err) {
    logger.error("Error connecting producer to Kafka");
  }
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
