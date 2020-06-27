module.exports = {
    name: 'emoji',
    description: 'Send an animated emoji without nitro',
    aliases: [],
  usage: "<emoji name>",
    execute(message, args, client, db, gm) {  
      if (!client.emojis.cache.find(emoji => emoji.name === args.join(' '))) return message.reply('Invalid emoji! (must be EXACT emoji name)');
      const emoji = client.emojis.cache.find(emoji => emoji.name === args.join(' ').replace(':', ''));
      message.channel.send(`${emoji}`);
      
  }
}