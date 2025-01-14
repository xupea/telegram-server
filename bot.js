const TelegramBot = require("node-telegram-bot-api");

function initBot() {
  const BOT_TOKEN = "7903384669:AAGsvMUk0S__UCcsxVj4vfZn7EiTyRx49ec"; //process.env.TELEGRAM_BOT_TOKEN as string;

  let bot = new TelegramBot(BOT_TOKEN, { polling: true });

  // 设置监听器
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    await bot.sendPhoto(
      chatId,
      "https://telegram-app-beige.vercel.app/assets/advertising.webp"
    );

    // 创建带 Emoji 图标的 Inline Button
    const inlineKeyboard = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Play 🎰",
              url: "https://t.me/SpinSorcery_bot/SpinSorcery",
            },
          ],
        ],
      },
    };

    const content = `
Looking for the best sweepstakes casino?
    
Spin Sorcery's got you covered! 🍀
    
1️⃣ 24h 100% cashback for all the newbies! 🎉
    
2️⃣ Daily Free SC, all day, every day! 💸
    
3️⃣ Tons of fun slot machines to play! 🎰
    
4️⃣️ Super fast Redemption! ⚡
    
What are you waiting for? Spin & Bet, no risk, all fun! Let’s go! 🚀`;

    // 发送带 Emoji 图标的 Inline Button
    bot.sendMessage(chatId, content, inlineKeyboard);
  });

  console.log("Bot instance created");
}

module.exports = initBot;
