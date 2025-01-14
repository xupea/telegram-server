const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const initBot = require("./bot");
const app = express();
const port = 3000;

app.get("/send-msg-test", (req, res) => {
  res.send("Message sent!");
});

app.get("/send-msg-prod", async (req, res) => {
  const chatId = "@SpinSorcery";

  const bot = new TelegramBot(
    "7903384669:AAGsvMUk0S__UCcsxVj4vfZn7EiTyRx49ec",
    {
      polling: false,
    }
  );

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
            url: "https://t.me/SpinSorcery_bot",
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
  res.send("Message sent!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

initBot();
