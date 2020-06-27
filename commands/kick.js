module.exports = {
  name: 'kick',
  description: 'Kick someone.',
  execute: async(message, args, client, packageInfo, Discord) => {
  if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            return message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            return message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else if (!message.guild.member(user)) {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else if (!message.mentions.users.size) {
      message.reply("You didn't mention the user to kick!");
    }
  }
  };