const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')

module.exports.run = async(client,message,args)=>{
  let avatar = message.author.displayAvatarURL({format: "png"})
	
  firebase.firestore().collection("suggestions").doc("msg: " + args.join(' ')).set({suggestion: args.join(' ')})

  const messageEmbed = new discord.MessageEmbed()
    .setColor("#7E57C2")
    .setAuthor(message.author.tag, avatar)
    .setTitle(`Você mandou uma sugestão para o bot!`)
		.setDescription(`Sua sugestão: "${args.join(' ')}".\n\nFique de olho no [site do bot](https://luxinhe-bot.ga), é lá que é anunciado as novidades do bot.`)
		.setFooter(`Obrigado pela sua colaboração👍😊`)
  message.channel.send(messageEmbed)
}