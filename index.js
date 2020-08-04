const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config/config.json')

client.login(config.token)

client.on('ready', () => {
    console.log('Bot Ligado')
    client.user.setActivity('Brasileirão 20/21', { type: 'WATCHING' })
})
    //sempre bom ter um bot educado 
    client.on ('message', msg => { if (msg.content === 'salve')
     { msg.reply('Salve irmão!') } });

    //usar ".tabelaDigo" pra ele mandar a tabela (por enquanto só a frase xD)

    client.on('message', msg2 => { 
        if (msg2.content === '.tabelaDigo') { 
            msg2.reply('É pra já campeão!') 
        } 
    })