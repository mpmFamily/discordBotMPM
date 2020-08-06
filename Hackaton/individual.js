const times = require('./times.js')
const axios = require('axios');
const Discord = require('discord.js');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const url = 'https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/'
let nomes = ['flamengo', 'santos', 'palmeiras','gremio','athletico','sao paulo','internacional','corinthians','fortaleza','goias','bahia','vasco','atletico','fluminense','botafogo','ceara','cruzeiro','csa','chapecoense','avai']

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
            embedTime.addField(partidas[2].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[7].children[0].data,'saldo de gols')
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
            embedTime.addField(partidas[15].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[20].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[2]}`) || msg.content.toLowerCase().startsWith(`!time torneiras`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')


            embedTime.setTitle('Palmeiras - SP (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png')
            embedTime.addField(pontos[2].children[0].data, 'pontos totais')
            embedTime.addField(partidas[28].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[33].children[0].data, 'saldo de gols')
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
           


            embedTime.setTitle('Gremio - RS (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/a/a1/Gremio.png')
            embedTime.addField(pontos[3].children[0].data, 'pontos totais')
            embedTime.addField(partidas[41].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[49].children[0].data, 'saldo de gols')
            embedTime.setColor('#49a0b8')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[4]}`) || msg.content.toLowerCase().startsWith(`!time athletico paranaense`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Athletico Paranaense - RS (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/c/c7/Club_Athletico_Paranaense_2019.png')
            embedTime.addField(pontos[4].children[0].data, 'pontos totais')
            embedTime.addField(partidas[54].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[62].children[0].data, 'saldo de gols')
            embedTime.setColor('#db2121')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[5]}`) || msg.content.toLowerCase().startsWith(`!time tricolor`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Sao Paulos - SP (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png')
            embedTime.addField(pontos[5].children[0].data, 'pontos totais')
            embedTime.addField(partidas[67].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[75].children[0].data, 'saldo de gols')
            embedTime.setColor('#f2ebeb')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[6]}`) || msg.content.toLowerCase().startsWith(`!time inter`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Internacional - RS (2019)')
            embedTime.setThumbnail('https://seeklogo.com/images/I/Internacional-logo-5968800B66-seeklogo.com.png')
            embedTime.addField(pontos[6].children[0].data, 'pontos totais')
            embedTime.addField(partidas[80].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[88].children[0].data, 'saldo de gols')
            embedTime.setColor('#d41717')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[7]}`) || msg.content.toLowerCase().startsWith(`!time curintia`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Corinthians - SP (2019)')
            embedTime.setThumbnail('https://catral.vteximg.com.br/arquivos/ids/166320-500-500/a.png?v=636924166501000000')
            embedTime.addField(pontos[7].children[0].data, 'pontos totais')
            embedTime.addField(partidas[93].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[101].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[8]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Fortaleza - CE (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/5/5e/FortalezaEC2019.png')
            embedTime.addField(pontos[8].children[0].data, 'pontos totais')
            embedTime.addField(partidas[106].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[114].children[0].data, 'saldo de gols')
            embedTime.setColor('#3a739e')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[9]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Goias - GO (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Goias_Esporte_Clube_logo.svg/1200px-Goias_Esporte_Clube_logo.svg.png')
            embedTime.addField(pontos[9].children[0].data, 'pontos totais')
            embedTime.addField(partidas[119].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[127].children[0].data, 'saldo de gols')
            embedTime.setColor('#edf2f5')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[10]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Bahia - BA (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/9/90/ECBahia.png')
            embedTime.addField(pontos[10].children[0].data, 'pontos totais')
            embedTime.addField(partidas[132].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[140].children[0].data, 'saldo de gols')
            embedTime.setColor('#0f57a8')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[11]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Vasco - RJ (2019)')
            embedTime.setThumbnail('https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F3454.png')
            embedTime.addField(pontos[11].children[0].data, 'pontos totais')
            embedTime.addField(partidas[145].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[153].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[12]}`) || msg.content.toLowerCase().startsWith(`!time atletico mineiro`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Atletico - MG (2019)')
            embedTime.setThumbnail('https://www.atletico.com.br/uploads/2019/02/05150600/logo-atual-Converted-1.png')
            embedTime.addField(pontos[12].children[0].data, 'pontos totais')
            embedTime.addField(partidas[158].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[166].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[13]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Fluminense - RJ (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/2/2a/Fluminense_de_Feira_FC.png')
            embedTime.addField(pontos[13].children[0].data, 'pontos totais')
            embedTime.addField(partidas[171].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[179].children[0].data, 'saldo de gols')
            embedTime.setColor('#34734f')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[14]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Botafogo - RJ (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png')
            embedTime.addField(pontos[14].children[0].data, 'pontos totais')
            embedTime.addField(partidas[184].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[192].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[15]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Ceara - CE (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/1200px-Cear%C3%A1_Sporting_Club_logo.svg.png')
            embedTime.addField(pontos[15].children[0].data, 'pontos totais')
            embedTime.addField(partidas[197].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[205].children[0].data, 'saldo de gols')
            embedTime.setColor('#000000')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[16]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Cruzeiro - MG (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/e/e4/CruzeiroEC2016.png')
            embedTime.addField(pontos[16].children[0].data, 'pontos totais')
            embedTime.addField(partidas[210].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[218].children[0].data, 'saldo de gols')
            embedTime.setColor('#2138ad')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[17]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Csa (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/b/b2/CSAal.png')
            embedTime.addField(pontos[17].children[0].data, 'pontos totais')
            embedTime.addField(partidas[223].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[231].children[0].data, 'saldo de gols')
            embedTime.setColor('#12216b')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[18]}`) || msg.content.toLowerCase().startsWith(`!time chapeco`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Chapecoense - SC (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/pt/thumb/e/e4/Novo_escudo_da_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.png/120px-Novo_escudo_da_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.png')
            embedTime.addField(pontos[18].children[0].data, 'pontos totais')
            embedTime.addField(partidas[236].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[244].children[0].data, 'saldo de gols')
            embedTime.setColor('#1fc25b')
            msg.channel.send(embedTime)
        })
    }
    else if (msg.content.toLowerCase().startsWith(`!time ${nomes[19]}`)) {
        axios.get(url + 2019).then(response => {
            const html = (response.data);
            const $ = cheerio.load(html);
            const embedTime = new MessageEmbed();
            let pontos = $('.expand-trigger > th ')
            let partidas = $('.expand-trigger > td ')



            embedTime.setTitle('Avai - SC (2019)')
            embedTime.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Avai_FC_%2805-E%29_-_SC.svg/1200px-Avai_FC_%2805-E%29_-_SC.svg.png')
            embedTime.addField(pontos[19].children[0].data, 'pontos totais')
            embedTime.addField(partidas[249].children[0].data, 'vitorias')
            embedTime.addField(partidas[1].children[0].data, 'partidas jogadas')
            embedTime.addField(partidas[257].children[0].data, 'saldo de gols')
            embedTime.setColor('#1f70c2')
            msg.channel.send(embedTime)
        })
    }
};

const sendData = () => {
};
