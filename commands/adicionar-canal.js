const discord = require('discord.js')
const axios = require('axios')
const config = require('../config.json')
require('dotenv/config')

module.exports.run = async(client,message,args)=>{
  axios.post("https://luxinhe-bot.herokuapp.com/addchannel" || 'localhost:3000/addchannel', {channel_id: message.channel.id})
  .then(res => {})
  const messageEmbed = new discord.MessageEmbed()
    .setColor('#4BFF86')
    .setAuthor(config.bot_name, client.user.displayAvatarURL())
    .setTitle(`O canal "${message.channel.name}" foi adicionado com sucesso`)
    .setDescription(`Agora o canal "${message.channel.name}" vai receber notificações de bom dia.`)
  message.channel.send(messageEmbed)
}