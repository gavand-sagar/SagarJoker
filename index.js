const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const bot = new TelegramBot('6069867676:AAEZi0OQp6nPj_o3-MACfZhxWcs-EeRFsDU', {polling: true});

// Respond to /start command
bot.onText(/\/start/,async (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;

  const array = await bot.getMyCommands();

  const commands = array.map(x=>`/${x.command} - ${x.description}`).join('\n\n');

  bot.sendMessage(chatId, `Hello, ${firstName}! Welcome to your Telegram bot!\n\n\n${commands}`);
});

bot.onText(/\/command1/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, `Hello, Wanna ${msg.text}`);
});

// Respond to text messages
// bot.on('text', (msg) => {
//   const chatId = msg.chat.id;
//   const message = msg.text;

// //   msg.from

  

//   bot.sendMessage(chatId,JSON.stringify( msg.from))
// //   bot.sendAudio(chatId,msg.)
// // const ggg = msg.contact
// //   if(msg.)
// // bot.sendPoll(chatId,'What is you fav Sport?',['Cricket','Badminton'])
// // bot.sendMessage(chatId, `You said: "${message}, your chat id is ${chatId}"`);
// });

// bot.on('message',(message)=>{
//     bot.sendDice(message.chat.id)

//     // bot.sendMessage(message.chat.id,message.text)
// })

// bot.on('command1',(message)=>{
//     bot.sendMessage(message.chat.id,'ok')
// })

