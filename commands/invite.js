module.exports = {
    name: 'invite',
    description: 'Invite the bot to your server',
     execute: async(message, args, client) => {
      //Create the embed
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setTitle('Invite')
      .setdiscription('Invite me to any server! ;)')
      .setURL(`${process.env.INVITE}`);
            message.channel.send(embed);
    }
}
