/*
Por algum motivo a imagem no embed ainda não funciona
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
        let timesTable = undefined
        let pontosTable = undefined

        const getYearData = () => {
          if (args[0] > 2017 && args[0] < 2021){
            timesTable = $('.expand-trigger > td > .hidden-xs') 
            pontosTable = $('.expand-trigger > th')
          }
          else if (args[0] > 2011 && args [0] < 2018){
            timesTable = $('.tabela-expandir > tbody > tr > td > span')
            pontosTable = $('.tabela-expandir > tbody > tr > th')
          }
          else {      
            message.channel.send('Não tenho informação sobre esse ano. Apenas os campeonatos de 2012 a 2020.')
            return
          }
        }
        getYearData()
        const times = []
        let i = 0

        const embed1 = new MessageEmbed()
          .setTitle(`Tabela Brasileirão ${args[0]}`)
          .setColor('#0bef17')
          
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
        message.channel.send(embed1)
      })
      .catch(console.error);
}
    
