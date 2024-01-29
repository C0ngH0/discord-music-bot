module.exports = {
	name: 'Anime Websites',
	aliases: ['Anime Websites'],
	description: 'Anime Websites',
	execute(message, args, cmd, client, Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#CC6699')
		.setTitle('Wibu Time')
		.setURL('')
		.setDescription('Here is a list of website to watch anime:')
		.addFields(
			{name: 'Animevtn', value: 'https://animetvn.com/'},
			{name: 'Anime47', value: 'https://www.Anime47.com'},
			{name: 'Anime Vietsub Online', value: 'http://animevietsub.tv/'},
		)
		.setImage('https://pbs.twimg.com/media/DEjsLkoUwAALqsu.jpg')
		.setFooter('Kono mama de yoroshii desuka?');

		message.channel.send(newEmbed);
	}
}