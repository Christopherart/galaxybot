const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'shutdown',
    aliases: ['forcestop'],
    description: 'Shutdowns your bot',
    usage: 'shutdown',
    run: async(client, message, args) => {
if(!message.author.id === "put your id") return message.channel.send("You are not the Owner of the bot")
message.channel.send("Shutting down the bot...")
client.destroy()
    }
}
