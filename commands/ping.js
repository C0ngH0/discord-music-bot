module.exports = {
	name:'ping',
	description: "this is ping",
	execute(message, args, cmd, client, Discord){
		message.channel.send('pong');
	}
}