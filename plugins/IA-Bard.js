import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*ᴘʀᴏᴘᴏʀᴄɪᴏɴᴀ ᴜɴ ᴛᴇxᴛᴏ.*_\n\n*[🐶] ᴇᴊᴇᴍᴘʟᴏ:* _${usedPrefix + command} Hola Bard, ¿cómo estás?_`;
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
      throw '_*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*_';
    }
  } catch (error) {
    throw `_*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*_`;
  }
};

handler.help = ['bard']
handler.tags = ['AI']
handler.command = /^bard$/i;

export default handler;
