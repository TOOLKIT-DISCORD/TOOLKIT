module.exports = {
  name: 'ban',
  description: 'Ban someone!',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to do that!');
  if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
};