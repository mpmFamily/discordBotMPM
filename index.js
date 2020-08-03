const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config/config.json')
client.login(config.token)
client.on('ready', () => { console.log('Bot Ligado') });