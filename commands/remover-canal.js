const discord = require('discord.js')
const axios = require('axios')
const config = require('../config.json')
require('dotenv/config')

module.exports.run = async (client, message, args) => {
  axios.post("https://luxinhe-bot.herokuapp.com/removechannel" || 'localhost:3000/removechannel', { channel_id: message.channel.id })
    .then(res => {})
  const messageEmbed = new discord.MessageEmbed()
    .setColor('#FF1800')
    .setAuthor(config.bot_name, client.user.displayAvatarURL())
    .setTitle(`O canal "${message.channel.name}" foi removido com sucesso`)
    .setDescription(`Agora o canal "${message.channel.name}" não vai mais receber notificações de bomdia`)
  message.channel.send(messageEmbed)
}