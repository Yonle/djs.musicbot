const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //Get queue
    const queue = client.player.getQueue(message.guild.id);

    //If there's no music
    if(!queue) return message.channel.send(`There's nothing playing.`);

    //Message
    message.channel.send(`**Server Queue**\n\n⏯Now Playing - ${queue.playing.name} | ${queue.playing.author}\n`+
    (
        queue.tracks.map((track, i) => {
            return `#${i+1} - ${track.name} | ${track.author}`
        }).join('\n')
    ));

}
