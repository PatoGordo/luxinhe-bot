const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')
require('dotenv/config')

module.exports.run = async(client,message,args)=>{
  firebase.firestore().collection("channels").doc(message.channel.id).set({channel_id: message.channel.id})

  const messageEmbed = new discord.MessageEmbed()
    .setColor('#4BFF86')
    .setAuthor(config.bot_name, client.user.displayAvatarURL())
    .setTitle(`O canal "${message.channel.name}" foi adicionado com sucesso`)
    .setDescription(`Agora o canal "${message.channel.name}" vai receber notificações de bom dia.`)
  message.channel.send(messageEmbed)
}