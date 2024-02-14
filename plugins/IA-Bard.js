import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*𝑷𝒓𝒐𝒑𝒐𝒓𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐.*_\n\n*[🐶] 𝒆𝒋𝒆𝒎𝒑𝒍𝒐:* _${usedPrefix + command} Hola Bard, ¿cómo estás?_`;
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
      throw '_*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*_';
    }
  } catch (error) {
    throw `_*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*_`;
  }
};

handler.help = ['bard']
handler.tags = ['ia']
handler.command = /^bard$/i;

export default handler;
