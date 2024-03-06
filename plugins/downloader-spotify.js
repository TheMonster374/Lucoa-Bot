
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛𝑎 𝑐𝑎𝑛𝑐𝑖𝑜𝑛 𝑑𝑒 𝑠𝑝𝑜𝑡𝑖𝑓𝑦\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* _${usedPrefix + command} Kanii, Riovaz, & Nimstarr - Heart Racing (Official Music Video)_`;
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
    let spotifyi = ` 𝑆𝑃𝑂𝑇𝐼𝐹𝑌\n\n`
        spotifyi += ` 📚 *Título:* ${spty.title}\n\n`
        spotifyi += ` 👻 *Artista:* ${spty.artist}\n\n`
        spotifyi += ` 💽 *Álbum:* ${spty.album}\n\n`                 
        spotifyi += ` 📅 *Publicado:* ${spty.year}\n\n`   
        spotifyi += `╰┈►𝐸𝑛𝑣𝑖𝑎𝑛𝑑𝑜 𝑎𝑢𝑑𝑖𝑜 𝑒𝑠𝑝𝑒𝑟𝑎◄┈╯`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜';
  }
};
handler.help = ['spotify <texto>']
handler.tags = ['downloader']
handler.command = /^(spotify)$/i;
export default handler;
