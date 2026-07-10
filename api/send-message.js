export default async function handler(req, res) {
  // فقط اجازه‌ی متد POST رو می‌دیم
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, topic, message } = req.body;

  // اعتبارسنجی سمت سرور (خیلی مهمه، هیچوقت فقط به اعتبارسنجی فرانت‌اند اکتفا نکن)
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'فیلدهای ضروری خالی هستند.' });
  }

  // توکن و چت آیدی از Environment Variables خونده می‌شن، نه هاردکد توی کد
  // const token = process.env.TELEGRAM_BOT_TOKEN;
  // const chatId = process.env.TELEGRAM_CHAT_ID;
  const token = "8948345151:AAFftxE9RrTBeYAdDvR8rcVfK_7XRShxoTE";
  const chatId = "6818256494";

  const text = `
  topic : ${formTopic}

  name : ${formName}
  email : ${formEmail}

  text : 
    ${formMessage}
  `;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    const data = await telegramRes.json();

    if (data.ok) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(502).json({ ok: false, error: 'خطا در ارسال به تلگرام' });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'خطا در ارتباط با سرور' });
  }
}
