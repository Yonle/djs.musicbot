const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //Message
    message.channel.send(`🏓PONG!!!\nAPi Latency: \`${client.ws.ping}\``)}
