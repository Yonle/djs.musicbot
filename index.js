//Modules
const Discord = require("discord.js");
const fs = require("fs");
const db = require("taichi.db")

module.exports = {

login: function(token) {
if (token === undefined||token === "") {
throw new TypeError("The argument must be of type string or an instance of Buffer or URL. Received undefined")
return false;
}




//New client
const client = new Discord.Client();
//Create a new Player
const { Player } = require("discord-player")

//To easily access the player
const player = new Player(client)
client.player = player;

//Events
fs.readdir("node_modules/djs.musicbot/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

//New commands
client.commands = new Discord.Collection();

//Commands
fs.readdir("node_modules/djs.musicbot/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

//Login
client.login(token);
},

PREFIX: function(pfx) {
if (pfx === undefined||pfx === "") {
return
}
db.set("prefix", pfx)
return;
},

STATUS: function(s) {
if (!s||s === undefined||s === "") return;
db.set("status", s)
return;
},

disableHelpCMD: function(s) {
db.set("nohelp", s)
}
}
