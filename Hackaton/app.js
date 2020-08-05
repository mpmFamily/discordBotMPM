'use strict';

const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const data = require('./data.js')
const prefix = "!"
let ano = [2019, 2020];
let nomes = ['flamengo', 'santos', 'palmeiras']
let aleatorio = Math.random();


bot.login(config.token);

bot.on('ready', () => {
    console.log('connected')
    bot.user.setActivity('lixo no mar', { type: 'PLAYING' });
});

bot.on('message', msg => {
    let responde = {
        "!bot": "to on amigao, use >> !comandos << para mais informacoes",
        "oi": "salve",
        "!comandos": "!pinto\n!gay\n!bot\n",
        "!help":"aqui nois usa !comandos ok",
        "!gay": `claro que eh o ${msg.author}`,
        "salve": "salvado pae",
       
    }
    if (msg.author.bot) { return; }

    if (msg.content.toLowerCase().startsWith('!pinto')) {
        msg.channel.send(`seu pinto tem ${aleatorio} cm`)
    }


    if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[0]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[0]}`)) {
        data.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[1]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[1]}`)) {
        data.run(msg, bot)
    }

    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[0]}`)) {
        data.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[1]}`)) {
        data.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[2]}`)) {
        data.run(msg, bot)
    }

    else if (msg.content.startsWith(`${config.prefix}time`,)) {
        msg.channel.send('esse ano ainda nao esta disponivel, tente novamente em breve')
    }


    if (responde[msg.content.toLowerCase()]) {
        msg.channel.send(responde[msg.content.toLowerCase()]);
    }
});


