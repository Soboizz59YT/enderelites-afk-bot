const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'yourserver.aternos.me', // replace with your Aternos IP
  port: 25565,
  username: 'AFK_Bot'
});

bot.on('login', () => {
  console.log('✅ AFK Bot logged in!');
  bot.chat('/register afkpassword'); // if AuthMe plugin is installed
  bot.chat('/login afkpassword');
});

bot.on('end', () => {
  console.log('🔁 Bot disconnected. Reconnecting in 10s...');
  setTimeout(() => {
    process.exit(1); // Restarts if using Railway or PM2
  }, 10000);
});
