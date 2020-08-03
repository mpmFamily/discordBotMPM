const config =require('./config/config.json')
const Discord = require("discord.js")
const client = new Discord.Client()
client.login(config.token)

client.on("message", msg =>
{
    let responde = 
        {
            "oi": "ola vadia",
            "bom dia": "bom dia puta",
            "ola": "ola prostiranha",
            "navas macaco": "=true",
        }
    if (msg.author.bot) {return;}
   
    if (responde[msg.content])
    {
        msg.channel.send(responde[msg.content]);
    }
})