const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`There's nothing playing.`)
    const song = await client.player.nowPlaying(message.guild.id);

    //Message
    message.channel.send(`⏯Currently playing ${song.name} ${emotes.music}\nProgress: [${client.player.createProgressBar(message.guild.id)}]`);

}
