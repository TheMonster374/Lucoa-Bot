import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'ᴘᴏʀ ꜰᴀᴠᴏʀ, ᴘʀᴏᴘᴏʀᴄɪᴏɴᴀ ᴜɴ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴇɴᴠɪᴀʀ ᴀ ʙᴀʀᴅ2 \n\n*[🐶] ᴇᴊᴇᴍᴘʟᴏ:* _${usedPrefix + command} Hola Bard, ¿cómo estás?_';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/bard?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> Bard AI

${data.result}`);
    } else {
      throw `
> Sin respuesta


No se pudo obtener una respuesta de la API.`;
    }
  } catch (error) {
    throw `
> Sin respuesta

Ocurrió un error: ${error}`;
  }
};

handler.help = ['bard2'];
handler.tags = ['ia'];
handler.command = /^bard2$/i;

export default handler;
