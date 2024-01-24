import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*Nombre de la canción faltante, por favor ingrese el comando más el nombre/titulo de una canción*\n\n*Ejemplo:*\n*${usedPrefix + command} Nimstarr - Heart Racing*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*Puedes descargar el video que quieras de la siguiente forma:*
${usedPrefix}audio <numero>
${usedPrefix}video <numero> 

*Ejemplos:*
*${usedPrefix}audio 5*
*${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ *_Link :_* ${v.url}
↳  *_Duración :_* ${v.timestamp}
↳  *_Subido :_* ${v.ago}
↳  *_Vistas :_* ${v.views}`;
    }).join('\n\n────────────────────────────\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*ERROR, intenta con el nombre de otra cancion*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
