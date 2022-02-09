# Simple Notes app

This is a simple note with some features :
* CRUD notes
* Sharing a note with others
* Uploading an image in a notes
* Exporting a note through an email
* Registering  a user using JWT authentication


## How to run it?

Some third-party dependencies that need to prepare before run the server:
* Postgresql
* Redis
* Rabbitmq

**Don't forget to enter the IP of the third-party dependencies into the env file.*

Migrate schema db :

```
yarn migrate
```

Run the server :

```
yarn start-prod
```

Run the consumer of rabbitmq :

```
yarn start-consumer
```