const axios = require('axios');
const Discord = require('discord.js');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const url = 'https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/'
let ano = [2019, 2020]
let nomes = ['flamengo', 'santos', 'palmeiras']

exports.run = (msg, bot) => {
    if (msg.content.toLowerCase().startsWith(`!time ${ano[0]}`) || msg.content.toLowerCase().startsWith(`!time${ano[0]}`)){
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);          
            const embedTime = new MessageEmbed();
            let timesTable = $('.expand-trigger > td > .hidden-xs ')

            embedTime.setTitle('Times brasileirao 2019')
            for (let i = 0; i <= 19; i++) {
                const individualTeam = timesTable[i].children[0]
                const time = individualTeam.data
                embedTime.addField(time, `${i + 1} posicao`)
            }
            embedTime.setColor('#DC143C');
            msg.channel.send(embedTime)
           
        })

        

    }

    else if (msg.content.toLowerCase().startsWith(`!time ${ano[1]}`) || msg.content.toLowerCase().startsWith(`!time${ano[1]}`)){
        axios.get(url + 2020).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let timesTable = $('.expand-trigger > td > .hidden-xs')

            embedTime.setTitle('Times brasileirao 2020')
            embedTime.setDescription('sem posicao definida')
            for (let i = 0; i <= 19; i++) {
                const individualTeam = timesTable[i].children[0]
                const time = individualTeam.data
                embedTime.addField(time, '-------------')
            }
            embedTime.setColor('#FFD700');
            msg.channel.send(embedTime)
        })
    }

    if (msg.content.toLowerCase().startsWith(`!time ${nomes[0]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td')


            embedTime.setTitle('Flamengo')
            embedTime.addField(pontos[0].children[0].data, 'pontos')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
          
};

const sendData = () => {
};
