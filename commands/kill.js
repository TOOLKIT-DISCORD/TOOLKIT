var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
  name: 'kill',
  description: 'kill the bot',
  usage: '',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!ids.includes(message.author.id)) return;
    message.channel.send('Goodbye! 0/');
    client.user.setUsername("ToolKit OFFLINE");
    client.user.setStatus ('invisible');
    message.channel.send('3');
    const countdown = await message.channel.send('3');
    function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
        sleep(1000);
    countdown.edit("2");
        sleep(1000);
    countdown.edit("1");
        sleep(1000);
    client.destroy()
    }
};