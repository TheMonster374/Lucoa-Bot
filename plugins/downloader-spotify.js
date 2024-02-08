
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `_*[🔊] ꜱᴘᴏᴛɪꜰʏ [🔊]*_\n\n*ʜᴀᴄᴇ ꜰᴀʟᴛᴀ ᴇʟ ᴛÍᴛᴜʟᴏ ᴅᴇ ʟᴀ ᴄᴀɴᴄɪᴏɴ ᴅᴇ ꜱᴘᴏᴛɪꜰʏ.*\n\n*[🐶] ᴇᴊᴇᴍᴘʟᴏ:* _${usedPrefix + command} Kanii, Riovaz, & Nimstarr - Heart Racing (Official Music Video)_`;
  try {
    const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = ` _*[🔊] ꜱᴘᴏᴛɪꜰʏ [🔊]*_\n\n`
        spotifyi += ` 📚 *Título:* ${spty.title}\n\n`
        spotifyi += ` 👻 *Artista:* ${spty.artist}\n\n`
        spotifyi += ` 💽 *Álbum:* ${spty.album}\n\n`                 
        spotifyi += ` 📅 *Publicado:* ${spty.year}\n\n`   
        spotifyi += `*Se está enviando el audio. espere...*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '_*[❗] ᴇʀʀᴏʀ [❗]*_\n\nᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ*';
  }
};
handler.help = ['spotify <texto>']
handler.tags = ['downloader']
handler.command = /^(spotify|music)$/i;
export default handler;
