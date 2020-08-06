'use strict';

const times = require('./times.js')
const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const individual = require('./individual.js')
const prefix = "!"
let ano = [2019, 2020];
let nomes = ['flamengo', 'santos', 'palmeiras', 'gremio', 'athletico', 'sao paulos', 'internacional', 'corinthians', 'fortaleza', 'goias', 'bahia', 'vasco', 'atletico', 'fluminense', 'bota fogo', 'ceara', 'cruzeiro', 'csa', 'chapecoense', 'avai']
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
        "salve": "salvado pae"
    }
    if (msg.author.bot) { return; }

    if (msg.content.toLowerCase().startsWith('!pinto')) {
        msg.channel.send(`seu pinto tem ${aleatorio} cm`)
    }


    if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[0]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[0]}`)) {
        times.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[1]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[1]}`)) {
        times.run(msg, bot)
    }

    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[0]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[1]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[2]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[3]}`)) {
        individual.run(msg, bot)
    }

    else if (msg.content.startsWith(`${config.prefix}time`,)) {
        msg.channel.send('ainda nao esta disponivel, volte em breve')
    }


    if (responde[msg.content.toLowerCase()]) {
        msg.channel.send(responde[msg.content.toLowerCase()]);
    }
});


