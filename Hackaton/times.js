const axios = require('axios');
const Discord = require('discord.js');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const url = 'https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/'
let ano = [2019,2020,2018]
let nomesTimes = [];
let nomesTimesVin = [];


exports.run = (msg, bot) => {
    if (msg.content.toLowerCase().startsWith(`!time ${ano[0]}`) || msg.content.toLowerCase().startsWith(`!time${ano[0]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let timesTable = $('.expand-trigger > td > .hidden-xs ')

            for (let i = 0; i <= 19; i++) {
                const individualTeam = timesTable[i].children[0]
                const time = individualTeam.data
                nomesTimes.push({ nomes: time })
            }
            embedTime.setTitle('Times brasileirao 2019')
            for (let i = 0; i <= 19; i++) {
                embedTime.addField(nomesTimes[i].nomes, `${i + 1} posicao`)
            }

            embedTime.setColor('#DC143C');
            msg.channel.send(embedTime)
        })
    }


    else if (msg.content.toLowerCase().startsWith(`!time ${ano[1]}`) || msg.content.toLowerCase().startsWith(`!time${ano[1]}`)) {
        axios.get(url + 2020).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTimeVin = new MessageEmbed();
            let timesTables = $('.expand-trigger > td > .hidden-xs ')

            for (let i = 0; i <= 19; i++) {
                const individualTeams = timesTables[i].children[0]
                const time = individualTeams.data
                nomesTimesVin.push({ nomes: time })
            }
            embedTimeVin.setTitle('Times brasileirao 2020')
            embedTimeVin.setDescription('sem posicao, organizacao alfabetica')
            for (let i = 0; i <= 19; i++) {
                embedTimeVin.addField(nomesTimesVin[i].nomes, '_______________')
            }

            embedTimeVin.setColor('#8B008B');
            msg.channel.send(embedTimeVin)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${ano[2]}`) || msg.content.toLowerCase().startsWith(`!time${ano[2]}`)) {
        axios.get(url + 2018).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let timesTable = $('.expand-trigger > td > .hidden-xs ')

            for (let i = 0; i <= 19; i++) {
                const individualTeam = timesTable[i].children[0]
                const time = individualTeam.data
                nomesTimes.push({ nomes: time })
            }
            embedTime.setTitle('Times brasileirao 2018')
            for (let i = 0; i <= 19; i++) {
                embedTime.addField(nomesTimes[i].nomes, `${i + 1} posicao`)
            }

            embedTime.setColor('#000000');
            msg.channel.send(embedTime)
        })
    }
}