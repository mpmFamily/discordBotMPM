const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const jo = new MessageEmbed()
    .setImage ('https://i.pinimg.com/originals/47/36/4d/47364d004bdf64f78d736a8cbedde9aa.png')
    .setTitle ("o melhor")
    .addField ("o melhor 2", "sim concordo")

client.login(config.token)
client.on('ready', () => {console.log("to on kk") 
    client.user.setActivity('fut contra o torneiras', { type: 'WATCHING' })
})
client.on('message', ederson => {
    let mensagem ={"!melhortime":"obviamente eh o corinthians", // acrescentar comandos no bot
                    "!cleber":"machado",
                    "!bolsonaro":"VAI 17! VAI 17!",
                    "salve":"salveado",
                    "oi":"salve",

                    "!comando":"resposta",
                    "!comando":"resposta",
                    "!comando":"resposta",
                    "!comando":"resposta",
                    "!comando":"resposta",
                    "!comando":"resposta",
                    "!comando":"resposta",
            }
if (ederson.author.bot){ // if para o bot não falar sozinho
    return;
}

if (ederson.content.toLowerCase().startsWith("!corinthians")){ // Este comando é uma resposta simples de bot

    ederson.channel.send(jo)
    
}

if (mensagem[ederson.content.toLowerCase()]) { // Serve para reconhecer os comandos das mensagens acima
    ederson.channel.send(mensagem[ederson.content.toLowerCase()]);
    }
})