import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `[📚] 𝑷𝒓𝒐𝒑𝒐𝒓𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐\n\n${JT.smsEjemplo} ${usedPrefix + command} Hola Bard, ¿cómo estás?, `;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '${JT.smsError}\n\n𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐';
    }
  } catch (error) {
    throw `${JT.smsError}\n\n𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐`;
  }
};

handler.help = ['bard']
handler.tags = ['ia']
handler.command = /^bard$/i;

export default handler;
