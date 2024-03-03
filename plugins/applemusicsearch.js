import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝐸𝑙 𝑁𝑜𝑚𝑏𝑟𝑒 𝐷𝑒 𝐿𝑎 𝐶𝑎𝑛𝑐𝑖𝑜𝑛\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* \n.applemusicsearch 8 - YSY A - NO NEGOCIO CON MI ALMA (PROD. ONIRIA)';
  }

  try {
    const apiUrl = `${apikasu}/api/search/applemusic?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`𝑬𝒓𝒓𝒐𝒓 𝒂𝒍 𝒃𝒖𝒔𝒄𝒂𝒓 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏 𝒆𝒏 𝒂𝒑𝒑𝒍𝒆 𝒎𝒖𝒔𝒊𝒄`);
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
