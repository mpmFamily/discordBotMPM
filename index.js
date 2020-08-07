const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

    client.login(config.token)
    client.on('ready', () => {console.log("to on kk") 
    client.user.setActivity('fut contra o torneiras', { type: 'WATCHING' })
})
    client.on('message',(ederson) => {
        
        if (ederson.content.startsWith(config.prefix)){
        if (ederson.author.bot) return

    const args = ederson.content.split(" ")
    args.shift()


    const  commandSplited = ederson.content.split(" ")[0]
    const  command = commandSplited.replace(/^./g,"")
    command.toLowerCase()
    console.log(command)

    try {
	    const  robertoCarlos = require(`./comandos/${command}`)
	    robertoCarlos.run(client, ederson, args) 
    }
    catch(e) {
        console.log(e)
	    ederson.channel.send('comando inválido')
    } 
    }
}) 