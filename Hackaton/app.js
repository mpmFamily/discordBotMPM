'use strict';

const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const data = require('./data.js')

bot.login(config.token);

bot.on('ready', () => {
    console.log('connected')
    bot.user.setActivity('lixo no mar', { type: 'PLAYING' });
});

bot.on('message', msg => {
    let responde = {
        ".bot": "to on amigao, use >> .comandos << para mais informacoes",
        "oi": "salve",
        ".comandos": ".teste  .status  .comandos  .gay",
        ".help":"aqui nois usa .comandos ok",
        ".gay": `claro que eh o ${msg.author}`,
        "salve": "salvado pae",
        ".pinto": "calma to desenvolvendo"
    }

    if (msg.content.startsWith('.status')) {
        data.run(msg, bot)
    }
    else if (msg.content.startsWith('.teste')) {
        data.run(msg, bot)
    }

    if (msg.author.bot) { return; }

    if (responde[msg.content.toLowerCase()]) {
        msg.channel.send(responde[msg.content.toLowerCase()]);
    }
});


