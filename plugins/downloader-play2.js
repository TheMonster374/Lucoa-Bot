import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*• Uso correcto*\n*Ejemplo:*\n${usedPrefix + command} Die For You`;
try {
let limit = 70;
let ytse = await yts(text);
let vid = ytse.all.find(v => v.type === "video");
let q = '128kbps'
let v = vid.url
let yt = await (async () => {
try {
return await youtubedl(v)
} catch {
return await youtubedlv2(v)
}
})()
let dl_url = await yt.audio[q].download()
let [ttl, size] = await Promise.all([
yt.title,
yt.audio[q].fileSizeH,
])
let shortURL = await getTinyURL(v);
let play = `‣ Nombre: ${vid.title}
‣ Tamaño: ${size}
‣ ID: ${vid.videoId}
‣ Link: ${shortURL}

El audio se esta mandando espere`.trim()
conn.sendFile(m.chat, vid.thumbnail, '', play, m)
let thumbnailBuffer = await axios.get("https://i.postimg.cc/rm3QgPdq/images-12.jpg", { responseType: 'arraybuffer' })
let buffer = await getBuffer(dl_url)
let bufferSize = buffer.byteLength
let contextInfo = {
forwardingScore: 99999,
isForwarded: false,
externalAdReply: {
showAdAttribution: true,
title: vid.title,
body: null,
mediaType: 2,
sourceUrl: 'https://youtube.com/@samuel_24_?si=OAvdEkM6sR_LIiUa',
thumbnail: Buffer.from(thumbnailBuffer.data),
}}    
if (bufferSize <= limit * 1024 * 1024) { 
conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', contextInfo, quoted: m })
} else {
if (bufferSize >= 180 * 1024 * 1024) { 
return m.reply(`El archivo supera el límite de tamaño de descarga (150 MB) y excede el límite de 180 MB como documento.`)
}
conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', contextInfo, quoted: m })
}} catch (error) {
}}
handler.help = ["play2"].map(v => v + " <búsqueda>")
handler.tags = ["downloader"]
handler.command = /^play2?$/i
export default handler

async function getTinyURL(text) {
try {
let response = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
return response.data;
  } catch (error) {
    return text; 
  }
}

async function getBuffer(url, options) {
  try {
    options = options || {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (err) {
    return err;
  }
}
