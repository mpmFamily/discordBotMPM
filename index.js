const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('liguei')
    client.user.setActivity('Brasileirão', {type: 'WATCHING'})
})


client.on('message', message => {

    if (message.content.startsWith(config.prefix)){ 

        if (message.author.bot) {
            return;
        }

        const args = message.content.split(" ")
        args.shift()  
        console.log(args)

        const commandSplited = message.content.split(" ")[0]
        const command = commandSplited.replace(/^./g,"")
        command.toLowerCase()
        console.log(command)
        
      
        try {
            const commandHandler = require(`./comandos/${command}`)
            commandHandler.run(client, message, args) 
        }
        catch {
            message.channel.send('comando inválido')
        }
    }
  });

client.on('disconnect', () => {
    client.destroy()
})


client.login(config.token)