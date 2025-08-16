# Pubsub prototype

The repo is a prototype to practice Kafka event streaming.

P.S: I realized later that pubsubs are a bit different than event streaming, don't go crazy about the name

## Setup

There are 4 services in total:

- Main server
- Email service
- Filesystem service
- Notification service


The setup is such that the main server is the producer while the other 3 services are the is the producer while the other 3 services are the consumers. When the main server gets a request, it publishes a message under the topic "ServerNotification". The other 3 consumers wait for this message and upon receiving it perform their respective operations

Docker is being used through Docker compose to setup Kafka clusters and Zookeeper along with Mailhog

You should first run `docker compose up` and then run the services accordingly

Note: Something cool I learnt while making this is consumer groups concept. It's pretty simple once you know it. Basically if multiple consumers are part of a group, when a message is fired, only one of them would process the message. So in this case where we have 3 services which do different things, we want them to be in different groups.
