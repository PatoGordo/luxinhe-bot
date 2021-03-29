const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')

module.exports.run = async(client,message,args)=>{
  firebase.firestore().collection("images").doc('msg: '+ args.join(' ')).set({message: args.join(' '), url: message.attachments.first().url})
  
  let avatar = message.author.displayAvatarURL({format: "png"})  
  
  const messageEmbed = new discord.MessageEmbed()
    .setColor("#7E57C2")
    .setAuthor(message.author.tag, avatar)
    .setTitle(`Você mandou uma nova imagem de bom dia para o bot!`)
    .setDescription(`Sua mensagem de bomdia: "${args.join(' ')}".\nSua foto de bomdia: `)
    .setImage(message.attachments.first().url)
    .setFooter(`Obrigado pela sua colaboração👍😊`)
  message.channel.send(messageEmbed)
}
