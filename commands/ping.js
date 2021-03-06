const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
  
  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setAuthor(config.bot_name)
    .setTitle(`🏓A latencia do bot é de ${Date.now() - message.createdTimestamp}ms. E a latencia da API é de ${Math.round(client.ws.ping)}ms`)
  message.channel.send(messageEmbed)
}
