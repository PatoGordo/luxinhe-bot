const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
  
  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setAuthor(config.bot_name)
    .setTitle(`Clique aqui para abrir o site do bot`)
    .setURL('https://luxinhe-bot.ga')
  message.channel.send(messageEmbed)
}