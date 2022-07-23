const axios = require("axios");

exports.handler = async (event) => {
  console.log("pipeline notifier", event);

  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const data = {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: `pipeline notifier ${JSON.stringify(event, null, 2)}`,
  };
  await axios.post(url, data);
};
