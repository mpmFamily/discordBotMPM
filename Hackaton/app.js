'use strict';

const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(config.token);

bot.on('ready', () => {
    console.log('connected')
    bot.user.setActivity('marcelo D2', { type: 'WATCHING' });
});


bot.on('message', msg => {
    let responde = {
        "oi zilio": "bot ta on pae",
        "oi": "salve",
        "salve":"salvado"
    }
    if (msg.author.bot) { return;}

    if (responde[msg.content].toLowerCase) {
        msg.channel.send(responde[msg.content]);
    }
});