const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const prefix = '-';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

//Goshujin sama
client.once('ready', () => {
console.log(`The music is on!!`);
});

client.on('message', message => {

	if (!message.content.startsWith(prefix)||message.author.bot)return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	}
	if(command === 'play'){
		client.commands.get('play').execute(message, args);
	}
	if(command === 'stop'){
		client.commands.get('stop').execute(message, args);
	}
	if(command === 'command'){
		client.commands.get('command').execute(message, args, Discord);
	}
}
);



client.login('ODk2MDkyMDYyNDg5OTAzMTU2.YWCExA.zbjpfAXwb4HCEIcHUg5vqwg33f8');