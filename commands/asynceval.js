var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
  name: 'asynceval',
  description: 'eval',
  usage: '<code>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!ids.includes(message.author.id)) return;
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
      try {
      const code = args.join(" ");
      let evaled = eval (eval(`( async () => {
  ${code}
})()`));
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(new Discord.MessageEmbed().setTitle('EVAL').setDescription('```x1\n' + clean(evaled) + '```'), {code:"xl", split: "true"});
    } catch (err) {
      console.error(err);
      message.channel.send(new Discord.MessageEmbed().setTitle('ERROR').setDescription(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``));
    }
  }
};