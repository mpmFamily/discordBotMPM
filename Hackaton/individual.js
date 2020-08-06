const times = require('./times.js')
const axios = require('axios');
const Discord = require('discord.js');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const url = 'https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/'
let nomes = ['flamengo', 'santos', 'palmeiras','gremio','athletico','sao paulos','internacional','corinthians','fortaleza','goias','bahia','vasco','atletico','fluminense','bota fogo','ceara','cruzeiro','csa','chapecoense','avai']

exports.run = (msg, bot) => {

    if (msg.content.toLowerCase().startsWith(`!time ${nomes[0]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')
            
            embedTime.setTitle('Flamengo - RJ (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png')
            embedTime.addField(pontos[0].children[0].data, 'pontos totais')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.setColor('#DC143C')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[1]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')


            embedTime.setTitle('Santos - SP (2019)')
            embedTime.setThumbnail('https://pbs.twimg.com/profile_images/1201694733376118786/d96e39ad_400x400.jpg')
            embedTime.addField(pontos[1].children[0].data, 'pontos totais')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[2]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')


            embedTime.setTitle('Palmeiras - SP (2019)')
            embedTime.setThumbnail('https://img.elo7.com.br/product/244x194/2BF496C/matriz-de-bordado-escudo-time-de-futebol-palmeira-maquina-de-bordar.jpg')
            embedTime.addField(pontos[2].children[0].data, 'pontos totais')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.setColor('#286336')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[3]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')
            let vitorias = $('')


            embedTime.setTitle('Gremio - RS (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/a/a1/Gremio.png')
            embedTime.addField(pontos[3].children[0].data, 'pontos totais')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(vitorias[3].children[0].data,'vitorias')
            embedTime.setColor('#49a0b8')
            msg.channel.send(embedTime)
        })
    }
          
};

const sendData = () => {
};
