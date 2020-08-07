const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')
const cheerio = require('cheerio')
const {MessageEmbed} = require('discord.js')
const anos = ["2020","2019","2018","2017","2016","2015"]
const serie = ["a","b","A","B"]
exports.run = (client,ederson, args) => {  
    
    if (args.length === 0) {return ederson.channel.send(`**Tente digitar a série e o ano da tabela que você procura.**\n***Exemplo:*** !tabela a 2020`)} 
        if (!anos.includes(args[1])) return ederson.channel.send(`Este ano não é valido, tente entre 2012 e 2020.`)
        if (!serie.includes(args[0])) return ederson.channel.send(`Esta série não é válida, tente a ou b.`)
        let serielimpa = args[0].toLowerCase()
    const url = (`https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-${serielimpa}/${args[1]}`)
    console.log(args.length)
    
        axios.get(url)
        .then(response  => {
        const html = (response.data)
        const $ /* cheerio */ = cheerio.load(html)
        const embedTimes = new MessageEmbed()
        let tabelatimes = $ (".expand-trigger > td > .hidden-xs")
        let pontosTimes = $('.expand-trigger > th')
        let nomestimes=[]
        let valortimes=[]
            for(let i=0;i<=19;i++){
                const individualtime = (tabelatimes[i].children[0])
                const time = individualtime.data
                nomestimes.push({nome:time})
                const pontotime = (pontosTimes[i].children[0])
                const ptime = pontotime.data
                valortimes.push({ponto:ptime})
        }
        embedTimes.setTitle("Campeonato Brasileiro de " +args[1])
        //console.log(nomestimes) 
            for(let i=0;i<=19;i++){
        embedTimes.addField(`${i+1}º  :arrow_right:  `+nomestimes[i].nome,`Pontos: **${valortimes[i].ponto}**\nJogos:\nVitórias:\nEmpates:\nDerrotas:\nGols Pró:\nGols Contra:\nSaldo de Gols:\nAproveitamento:\n**‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗**`)
            }
            embedTimes.setColor("#ff0000")
            ederson.channel.send(embedTimes)     
    })  
}