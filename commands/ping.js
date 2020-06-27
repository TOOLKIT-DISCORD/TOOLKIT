module.exports = {
    name: 'ping',
    description: 'Pong!',
     execute: async(message, args, client) => {
      //Create the embed
      const Discord = require('discord.js');
      const ping = await message.channel.send('Sending the Boops and the Beeps!');     
    ping.edit(new Discord.MessageEmbed()
      .setTitle('Ping!')
      .setDescription('Pong!')
      .addField('Latency', ping.createdTimestamp - message.createdTimestamp + 'ms')
      .addField('API Latency', Math.round(client.ws.ping) + 'ms'));
    }
}
