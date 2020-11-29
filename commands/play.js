const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //If no music is provided
    if (!args[0]) return message.channel.send(`Please specify a song to play ${emotes.error}`);

    const aTrackIsAlreadyPlaying = client.player.isPlaying(message.guild.id);

        //If there's already a track playing 
        if(aTrackIsAlreadyPlaying){

            //Add the track to the queue
            const result = await client.player.addToQueue(message.guild.id, args.join(" ")).catch(() => {});
            if(!result) {
                message.member.voice.channel.leave()
                return message.channel.send(`This song provider is not supported.`)
            };

            if(result.type === 'playlist'){
                message.channel.send(`${result.tracks.length} songs added to the queue `);
            } else {
                message.channel.send(`${result.name} added to the queue `);
            }

        } else {

            //Else, play the song
            const result = await client.player.play(message.member.voice.channel, args.join(" ")).catch(() => {});
            if(!result) {
                message.member.voice.channel.leave()
                return message.channel.send(`This song provider is not supported.`)
            };

            if(result.type === 'playlist'){
                message.channel.send(`${result.tracks.length} songs added to the queue \nCurrently playing ${result.tracks[0].name}`);
            } else {
                message.channel.send(`🎶Now Playing **${result.name}**`)
            }

            const queue = client.player.getQueue(message.guild.id)

            //Events
            .on('end', () => {
                message.channel.send(`Queue Ended.`)
            })
            .on('trackChanged', (oldTrack, newTrack) => {
                message.channel.send(`🎶Now Playing: ${result.name}`)
            })
            .on('channelEmpty', () => {
                message.channel.send(`💤Leaved Voice Channel because channel is Empty.`);
            });
        }
    }
