var status = require("taichi.db").get("status")
if (!status) status = "!help"
module.exports = async (client) => {

    //If the bot is ready it sends a message in the console
    console.log(`[djs.musicbot] Logged as ${client.user.tag}`)
    //Game
    client.user.setActivity(status)
}
