const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  const messageEmbed = new discord.MessageEmbed()
    .setColor('#55CDFC')
    .setAuthor(config.bot_name)
    .setTitle(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
  message.channel.send(messageEmbed)
}
