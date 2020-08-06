const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')

exports.run = (client,ederson, args) => { 
    axios.get('https://reqres.in/api/users?page=2')
    .then(response  => {
	    console.log(response.data)
    })  
}