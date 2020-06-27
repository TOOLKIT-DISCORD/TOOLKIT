module.exports = {
    name: 'work',
    description: 'Do some manual labor for money.',
    aliases: ['labor'],
    execute(message, args, client, db) {        
      const amountSet = new Set(), n = 250;
for (let i = 0; i < n; i++) {
  amountSet.add(i);
}      const gri = set => {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}  
      var amount = gri(amountSet);
      if (args[0] == 'slave' && db.get('slaves').includes(message.author.id)) { message.reply('you picked some cotton!')} else {
      if (message.channel.id !== '710604500074758204' && !message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '465564943065022475' && message.channel.id !== '683523070031298583') return message.reply('<#710604500074758204>');
      const workMsgs = db.get(`workMsgs_${message.guild.id}`) || ['You do a shift at a gas station.'];
      const workmsg = workMsgs[Math.floor(Math.random()*workMsgs.length)];

      const lossSet = new Set(), nn = 250;
      for (let i = 0; i < nn; i++) {
  amountSet.add(i);
}

      const gril = set => {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)] - items[Math.floor(Math.random() * items.length)] -1;
}
      var amount = gri(amountSet);
      const embed = {
    "embed": {
        "title": "Work",
        "description": workmsg,
        "footer": {
            "text": `${message.author.username} gained ${amount}`,
            "icon_url": `${message.author.displayAvatarURL()}`
        }
    }
}
      const oldBal = parseInt(db.get(`money_${message.author.id}`));
      db.set(`money_${message.author.id}`, oldBal + amount)
      message.channel.send(embed); }
  }
}