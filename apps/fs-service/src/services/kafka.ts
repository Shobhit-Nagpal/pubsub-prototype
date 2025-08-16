import { Kafka } from "kafkajs";
import logger from "./logger";
import { writeToSystem } from "../core/ops";

function initKafkaConsumer() {
  const kafka = new Kafka({
    clientId: "pubsub-prototype",
    brokers: ["localhost:29092", "localhost:39092"],
  });

  const consumer = kafka.consumer({ groupId: "test-group-2" });

  return consumer;
}

export async function connectAndSubscribeConsumer(topic: string) {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    logger.log("Consumer connected to Kafka...");
  } catch (err) {
    logger.error(`Error connecting to kafka: ${err}`);
  }
}

export async function runConsumer() {
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const msg = message.value?.toString();

      if (msg) {
        await writeToSystem(msg);
        logger.log({
          value: msg,
          topic,
          partition,
        });
      }
    },
  });
}

const consumer = initKafkaConsumer();

export default consumer;
