module.exports = {
    name: 'bal',
    description: 'How much money you have.',
    aliases: ['balance', 'money'],
    execute(message, args, client, db) {  
      if (message.channel.id !== '710604500074758204' && !message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '465564943065022475' && message.channel.id !== '683523070031298583') return message.reply('<#710604500074758204>');
      if (!message.mentions.users.first()) {
 const bal = db.get(`money_${message.author.id}`); 
        console.log(bal);
if (!bal) db.set(`money_${message.author.id}`, 500);
      const embed = {
    "embed": {
        "title": "Amount of Money",
        "color": 16711680,
        "footer": {
            "text": `${message.author.username}'s balance`,
            "icon_url": `${message.author.displayAvatarURL()}`
        },
        "description": `${message.author.username}, you have ${bal} dollars.`
    }
}; return message.channel.send(embed);
      } else {
     
      const mBal = db.get(`money_${message.mentions.users.first().id}`);
      
const mEmbed = {
    "embed": {
        "title": "Amount of Money",
        "color": 16711680,
        "footer": {
            "text": `${message.mentions.users.first().username}'s balance`,
            "icon_url": `${message.mentions.users.first().displayAvatarURL()}`
        },
        "description": `${message.mentions.users.first().username} has ${mBal} dollars.`
    }
}; console.log(mBal);
        return message.channel.send(mEmbed);
  }}
}