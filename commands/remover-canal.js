const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')
require('dotenv/config')

module.exports.run = async (client, message, args) => {
  firebase.firestore().collection("channels").doc(message.channel.id).delete()

  const messageEmbed = new discord.MessageEmbed()
    .setColor('#FF1800')
    .setAuthor(config.bot_name, client.user.displayAvatarURL())
    .setTitle(`O canal "${message.channel.name}" foi removido com sucesso`)
    .setDescription(`Agora o canal "${message.channel.name}" não vai mais receber notificações de bomdia`)
  message.channel.send(messageEmbed)
}