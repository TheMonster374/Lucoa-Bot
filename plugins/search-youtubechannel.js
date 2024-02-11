import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'ᴘᴏʀ ꜰᴀᴠᴏʀ, ᴘʀᴏᴘᴏʀᴄɪᴏɴᴀ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ᴄᴀɴᴀʟ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: youtubechannel Lusito Comunica';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/search/youtubechannel?channel=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status && data.result && data.result.length > 0) {
      const channel = data.result[0];

      let msg = `
> Y O U T U B E | C H A N N E L

*Nombre del Canal:* ${channel.channel_name}\n
*ID del Canal:* ${channel.channel_id}\n
*Descripción:* ${channel.channel_about}\n
*Fecha de Creación:* ${channel.channel_created}\n`

      await conn.sendFile(m.chat, channel.channel_picture.medium.url, 'channel_image.jpg', msg, m);
    } else {
      throw `
> Sin respuesta

No se encontraron resultados para el canal de YouTube proporcionado.`;
    }
  } catch (error) {
    throw `
> Sin respuesta

Ocurrió un error: ${error}`;
  }
};

handler.help = ['youtubechannel'];
handler.tags = ['search'];
handler.command = /^youtubechannel$/i;

export default handler;
