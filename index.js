const config =require('./config/config.json')
const Discord = require("discord.js")
const client = new Discord.Client()
client.login(config.token)


