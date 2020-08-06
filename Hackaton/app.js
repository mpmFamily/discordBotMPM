'use strict';

const times = require('./times.js')
const config = require('./config/config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const individual = require('./individual.js')
const prefix = "!"
let ano = [2019, 2020,2018];
let nomes = ['flamengo', 'santos', 'palmeiras', 'gremio', 'athletico', 'sao paulo', 'inter', 'corinthians', 'fortaleza', 'goias', 'bahia', 'vasco', 'atletico', 'fluminense', 'botafogo', 'ceara', 'cruzeiro', 'csa', 'chapeco', 'avai', 'torneiras', 'tricolor', 'curintia','mengao']


bot.login(config.token);

bot.on('ready', () => {
    console.log('connected')
    bot.user.setActivity('lixo no mar', { type: 'PLAYING' });
});

bot.on('message', msg => {
    let responde = {
        "!bot": "to on amigao\n use >> !comandos << para mais informacoes",
        "oi": "oi tudo bem?",
        "tudo": 'ngm te pergunto',
        "to bem": "ngm te pergunto",
        "tudo bem": "ngm te pergunto",
        "voce pergunto": "a eh vredade",
        "vc pergunto":"a eh vredade",
        "!comandos": "!time ano\n!time seu time\n!gay\n",
        "!help": "!time ano\n!time seu time\n!gay\n",
        "!ajuda": "!time ano\n!time seu time\n!gay\n",
        "!gay": `claro que eh o ${msg.author}`,
        "salve": "salvado pae"
    }
    if (msg.author.bot) { return; }

    if (msg.content.toLowerCase().startsWith('!pinto')) {
        msg.channel.send(`seu pinto tem alguns cm`)
        msg.channel.send('comando quebro to triste')
    }

    if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[0]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[0]}`)) {
        times.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${ano[1]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[1]}`)) {
        times.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${ano[2]}`) || msg.content.toLowerCase().startsWith(`${config.prefix}time${ano[2]}`)) {
        times.run(msg, bot);
    }

    for (let i = 0; i <= 24; i++) {
        if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[i]}`)) {
            individual.run(msg, bot)
        }
    }
/*
          JEITO MAIS DIFICIL E COMPLCIADO 
  
    if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[0]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[1]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[2]}`) || msg.content.toLowerCase().startsWith(`!time torneiras`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[3]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[4]}`) || msg.content.toLowerCase().startsWith(`!time athletico paranaense`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[5]}`) || msg.content.toLowerCase().startsWith(`!time tricolor`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[6]}`) || msg.content.toLowerCase().startsWith(`!time inter`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[7]}`) || msg.content.toLowerCase().startsWith(`!time curintia`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[8]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[9]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[10]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[11]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[12]}`) || msg.content.toLowerCase().startsWith(`!time atletico mineiro`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[13]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[14]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[15]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[16]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[17]}`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[18]}`) || msg.content.toLowerCase().startsWith(`!time chapeco`)) {
        individual.run(msg, bot)
    }
    else if (msg.content.toLowerCase().startsWith(`${config.prefix}time ${nomes[19]}`)) {
        individual.run(msg, bot)
    }*/



    if (responde[msg.content.toLowerCase()]) {
        msg.channel.send(responde[msg.content.toLowerCase()]);
    }
    })