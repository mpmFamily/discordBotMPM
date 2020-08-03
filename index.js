//const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()


client.on('message', (message) => { 
    
})


client.login(config.token)

console.log(config.prefix)