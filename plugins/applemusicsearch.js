import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'ɪɴɢʀᴇꜱᴇ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇ ʟᴀ ᴄᴀɴᴄɪᴏɴ\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: .applemusicsearch 8 - YSY A - NO NEGOCIO CON MI ALMA (PROD. ONIRIA)';
  }

  try {
    const apiUrl = `${apikasu}/api/search/applemusic?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`ᴇʀʀᴏʀ ᴀʟ ʙᴜꜱᴄᴀʀ ʟᴀ ᴄᴀɴᴄɪᴏɴ ᴇɴ ᴀᴘᴘʟᴇ ᴍᴜꜱɪᴄ`);
    }

    const json = await response.json();


    const songInfo =`
*A P P L E M U S I C*
*Nombre:* ${json.result.name}\n
*Artista:* ${json.result.artist}\n
*Álbum:* ${json.result.album}\n
*Fecha de lanzamiento:* ${json.result.release_date}\n
*Precio:* ${json.result.price}\n
*Duración:* ${json.result.length}\n
*Género:* ${json.result.genre}\n
*Enlace:* ${json.result.url}`

    if (json.result.thumbnail) {
      await conn.sendFile(m.chat, json.result.thumbnail, 'thumbnail.jpg', songInfo, m);
    } else {
      m.reply(songInfo);
    }

  } catch (error) {
    console.error(error);
    throw `
> ꜱɪɴ ʀᴇꜱᴘᴜᴇꜱᴛᴀ
ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴘʀᴏᴄᴇꜱᴀʀ ʟᴀ ꜱᴏʟɪᴄɪᴛᴜᴅ: ${error.message}`;
  }
};

handler.help = ['applemusicsearch'];
handler.tags = ['search'];
handler.command = /^(applemusicsearch)$/i;

export default handler;
