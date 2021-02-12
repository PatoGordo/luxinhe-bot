const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  let gifs = [
    "http://67.media.tumblr.com/aadf9ceaee89957b111e844a53dbf806/tumblr_o925gmua611uhpv9wo1_500.gif",
		"https://media1.tenor.com/images/6752fb6198bfb2d969fb0a9dfa2d6be6/tenor.gif?itemid=5155462",
		"https://steamuserimages-a.akamaihd.net/ugc/519385362695345468/42044CBEC634F36CD92369B1B5985A123FD025D8/",
		"https://i.pinimg.com/originals/71/09/04/71090446b5bbdc5fda1bccf883457b99.gif",
		"https://i.pinimg.com/originals/32/89/d8/3289d80dcec9c95a0b895a479b90e88c.gif",
		"https://thumbs.gfycat.com/AntiqueScaryAustraliansilkyterrier-size_restricted.gif",
		"http://45.media.tumblr.com/8d8b3767047383223ad3aadee54c9d4e/tumblr_nylqzy91Y31sbzv20o1_500.gif",
		"https://data.whicdn.com/images/338279644/original.gif",
		"https://pa1.narvii.com/6200/1c6aa119d5c408a33c4f269bc0ff5bda109acc26_hq.gif",
		"https://pa1.narvii.com/6470/5a67925c8ad53efef9845377a03d43ff3ada59b6_hq.gif"
	]

  var randomGif = gifs[Math.floor(Math.random() * gifs.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  let avatar = message.author.displayAvatarURL({format: "png"})
  if (!user){
    return message.reply(`Quer carinho! 😞🥺`)
  }

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle("Fez carinnho 😍😊")
    .setAuthor(message.author.tag, avatar)
    .setImage(randomGif)
    .setDescription(`${message.author.username} **fez carinho em** ${user.username} 🥰`)
		.setFooter('Clique em 🔁 para retribuir')
  message.channel.send(messageEmbed)
	.then(message => message.react('🔁'))
}