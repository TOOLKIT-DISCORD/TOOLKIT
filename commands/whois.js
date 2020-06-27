
module.exports = {
    name: 'whois',
    description: 'Get info on a user!',
    aliases: ['userinfo'],
    execute(message, args, client, db) {  
        let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
  if (!muser) muser = message.member;
  if (!user) user = message.author;
  const d = require('discord.js');
  const moment = require('moment'); 
  const embed = new d.MessageEmbed()
    .addField("Username", `${user.username}#${user.discriminator}`, true);
    embed.addField("ID", `${user.id}`, true)
    .setColor(3447003)
    .setThumbnail(`${user.avatarURL()}`)
    .setTimestamp()
    .setURL(`${user.avatarURL()}`)
    .addField("Currently", `${muser.presence.status.toUpperCase()}`, true)
    //.addField('Game', `${muser.presence.game === null ? "No Game" : muser.presence.game.name}`, true)
    .addField(
      "Joined Discord",
      `${moment(user.createdAt)
        .toString()
        .substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`,
      true
    )
    .addField(
      "Joined Server",
      `${moment(muser.joinedAt)
        .toString()
        .substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`,
      true
    )
    .addField("Roles", `${muser.roles.cache.array()}`, true)
    .addField("Is a bot?", `${user.bot.toString().toUpperCase()}`, true)
    .setFooter(`TOOLKIT`);
  message.channel.send({ embed });

  }
};