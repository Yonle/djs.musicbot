const config = require ("taichi.db").all()
const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
const db = require("taichi.db")
exports.run = async (client, message, args) => {

if (db.get("nohelp") === true) return;
    //New embed
    const help = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("Command List | "+client.user.username)
    .setDescription("Find the list of available commands on this panel.")
    .addField("**Music - (11)**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Filters - (18)**", "`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`")
    .addField("**Informations - (1)**", "`ping`")
    .setFooter(`To use filters, ${config.prefix}filter (the filter). Example: ${config.prefix}filter 8D.`)
    .setColor("RANDOM")
    //Message
    message.channel.send(help)

}
