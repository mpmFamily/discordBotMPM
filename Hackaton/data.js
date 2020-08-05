const axios = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();


exports.run = (msg, bot) => { 
    axios.get('https://reqres.in/api/users').then(response => {

        if (msg.content.startsWith('.teste')) {
            console.log(response.status);   

            let testando = response.data

            if (msg.author.bot) { return; }
            else { msg.channel.send(`${msg.author} aqui esta ${testando}`); }  
        }

        if (msg.content.startsWith('.status')) {
            let estatos = response.status

            if (msg.author.bot) { return; }
            else { msg.channel.send(`status de ${estatos}`); }  

        }
    })
};

const sendData = () => {
};
