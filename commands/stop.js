const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`There's nothing playing.`)
    //Stop player
    client.player.setRepeatMode(message.guild.id, false);
    client.player.stop(message.guild.id);

    //Message
    message.channel.send(`⏹Stopped`)

}
