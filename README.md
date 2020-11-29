# Djs.Musicbot

A simple discord.js Musicbot package.

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. FFMPEG is required
3. Node.js v12.0.0 or latest

## Getting started
```javascript
npm i djs.musicbot
```

## Documentation
All Method has Tested and Works Very well.

|Method|Description|Parameters|Required?|
|--------|-----------|------------|----------|
|STATUS|Set your Bot Activity|Getting a String|N|
|PREFIX|Set your Bot Prefix|Getting Prefix Text|N|
|disableHelpCMD|Disable `help` command.|-|N|
|login|Log in to your bot|Getting Bot Token for Connect to Bot.|Y|

## Example
**1. Beginner / First Example**

```js
const client = require("djs.musicbot")

//Set bot status
client.STATUS("!help")
client.PREFIX("!")

//Now log in to your bot

client.login("TOKEN-HERE")
```

**2. Disabling `help` commands because Your bots already have `help` Command.**
```js
 const client = require("djs.musicbot")

//Set bot status
client.STATUS("!help")
client.PREFIX("!")

//Disable Help Command
client.disableHelpCMD(true)
//If you want to enable it, Simply Change the `true` as `false`.

//Now log in to your bot

client.login("TOKEN-HERE")
```
## Community
Any Question / Doubt can Join our Discord Server [Here](https://discord.gg/9S3ZCDR)
