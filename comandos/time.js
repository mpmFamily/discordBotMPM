const Discord = require("discord.js")
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const cheerio = require('cheerio')

exports.run = (client, message, args) => {

    if (args[0] === undefined) {
        return message.channel.send('Escolha um time')
    } 

    const url = (`https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2019`)
    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        let timesTable = $('.expand-trigger > td > .hidden-xs') 
        let pontosTable = $('.expand-trigger > th')
        let vitoriasTable = $('.expand-trigger > td')

        const times = []
        let i = 0
          
        timesTable.each( () => {
            const individualTeam = timesTable[i].children[0]
            const individualTeamPoints = pontosTable[i].children[0]
            const time = individualTeam.data
            const pontos = individualTeamPoints.data
            const vitorias = vitoriasTable[2 + (i * 8)].children[0].data
            times.push({
              posicao: i + 1,
              nome: time,
              pontos: pontos,
              vitorias: vitorias

            })
            i++
        })

        let selectTeam = undefined

        let foo = 0
        times.forEach( () => {
            if(times[foo].nome.toLowerCase().startsWith(args[0].toLowerCase())){
                return selectTeam = times[foo]
            }
            foo++
        })
        console.log(selectTeam)

        const embed1 = new MessageEmbed()
          .setTitle(`Time escolhido: ${selectTeam.nome}`)
          .setColor('#fffff')
          .addField(`Posição na tabela: ${selectTeam.posicao}º`,`com ${selectTeam.pontos} pontos`, false)

        message.channel.send(embed1)
      })
      .catch(console.error);
}
    
