const config = require("../config.json")
const discord = require('discord.js')

module.exports = (client,message) => {
	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
		var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
		const messageEmbed = new discord.MessageEmbed()
			.setColor(randomColor)
			.setAuthor(config.bot_name, client.user.displayAvatarURL())
			.setTitle(`Eu respondo pelo prefixo ${config.prefix}`)
			.setDescription(`Tente usando "${config.prefix}help"`)
		return message.reply(messageEmbed)
	}
	if (message.author.bot) return
	if (message.channel.type == 'dm') return
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return

	const args = message.content
		.trim().slice(config.prefix.length)
		.split(/ +/g)
	const command = args.shift().toLowerCase()

	try {
		const commandFile = require(`../commands/${command}.js`)
		commandFile.run(client, message, args)
	} catch (err) {
		console.error('Error:' + err)
	}
}