import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '*ingresa el nombre de la cancion que quieres buscar*\n\nejemplo: .applemusicsearch 8 - YSY A - NO NEGOCIO CON MI ALMA (PROD. ONIRIA)';
  }

  try {
    const apiUrl = `${apikasu}/api/search/applemusic?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`[❌] Ocurrio un error al buscar la cancion en applemusic`);
    }

    const json = await response.json();


    const songInfo =`
*𝐴 𝑃 𝑃 𝐿 𝐸 𝑆𝐸𝐴𝑅𝐶𝐻*
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
> 𝐸𝑟𝑟𝑜𝑟
ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴘʀᴏᴄᴇꜱᴀʀ ʟᴀ ꜱᴏʟɪᴄɪᴛᴜᴅ: ${error.message}`;
  }
};

handler.help = ['applemusicsearch'];
handler.tags = ['search'];
handler.command = /^(applemusicsearch)$/i;

export default handler;
