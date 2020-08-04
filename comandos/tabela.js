/*
Por algum motivo a imagem no embed ainda não funciona e as tabelas de 2017 pra baixo mudaram o estilo, então é isso que falta
*/

const Discord = require("discord.js")
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const cheerio = require('cheerio')

exports.run = (client, message, args) => {

    args[0] === undefined ? args[0] = '2020' : args[0]

    const url = (`https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/${args[0]}`)
    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const timesTable = $('.expand-trigger > td > .hidden-xs');
        const pontosTable = $('.expand-trigger > th')
        const imgTable = $('.expand-trigger > td > img')
        const individualTeamImg = imgTable[0].attribs
        const img = individualTeamImg.src
        
        const times = []
        let i = 0

        const embed1 = new MessageEmbed()
          .setTitle(`Tabela Brasileirão ${args[0]}`)
          .setColor('#0bef17')
          .setImage(img)
          

        timesTable.each( () => {
            const individualTeam = timesTable[i].children[0]
            const individualTeamPoints = pontosTable[i].children[0]
            const time = individualTeam.data
            const pontos = individualTeamPoints.data
            times.push({
              posicao: i + 1,
              time,
              pontos
            })
            i++
            embed1.addField(`${i}º - ${time}`, `${pontos} pontos`, false)
            
        })
        console.log(img)
        message.channel.send(embed1)
      })
      .catch(console.error);
}
    
