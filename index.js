const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(config.token)
client.on('ready', () => {console.log("COMI O DE BAIXO") 
    client.user.setActivity('fut contra o torneiras', { type: 'PLAYING' });
})
