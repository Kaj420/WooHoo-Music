module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    message.reply(`API Response time: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
