'use strict';

const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(config.token);

bot.on('ready', () => {
    console.log('connected')
    bot.user.setActivity('sexo pra cego', { type: 'LISTENING' });
});


bot.on('message', msg => {
    let responde = {
        ".status": "bot ta on pae",
        "oi": "salve",
        ".comandos": ".status  .comandos  .gay",
        ".gay": `claro que eh o ${msg.author}`
    }

    if (msg.author.bot) { return; }

    if (responde[msg.content.toLowerCase()]) {
        msg.channel.send(responde[msg.content.toLowerCase()]);
    }
});


