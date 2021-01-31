const discord = require('discord.js')
const config = require('../config.json')
const axios = require('axios')

module.exports.run = async(client,message,args)=>{
  let avatar = message.author.displayAvatarURL({format: "png"})
	
	axios.post("https://luxinhe-bot.herokuapp.com/addsuggestion" || 'localhost:3000/addchannel', {suggestion: args.join(' ')})
  .then(res => {})

  const messageEmbed = new discord.MessageEmbed()
    .setColor("#7E57C2")
    .setAuthor(message.author.tag, avatar)
    .setTitle(`Você mandou uma sugestão para o bot!`)
		.setDescription(`Sua sugestão: "${args.join(' ')}".\n\nfique de olho no site do bot, é lá que é anunciado as novidades do bot.`)
		.setFooter(`Obrigado pela sua colaboração👍😊`)
  message.channel.send(messageEmbed)
}