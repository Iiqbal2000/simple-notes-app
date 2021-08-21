const amqp = require('amqplib');

const ProducerService = {
  // queue: nama queue (String)
  // message: pesan yg akan dikirim ke queue (String)
  sendMessage: async (queue, message) => {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, {
      durable: true,
    });

    await channel.sendToQueue(queue, Buffer.from(message));

    setTimeout(() => {
      connection.close();
    }, 1000);
  },
};

module.exports = ProducerService;
