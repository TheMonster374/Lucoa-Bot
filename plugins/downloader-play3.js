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
let play = `*‣* *Nombre:* ${vid.title}
*‣* *Tamaño:* ${size}
*‣* *ID:* ${vid.videoId}
*‣* *Link:* ${shortURL}

*El audio se esta mandando espere*`.trim()
conn.sendFile(m.chat, vid.thumbnail, '', play, m)
let thumbnailBuffer = await axios.get("https://images.app.goo.gl/ctK9XYP1aK2Pnaw5A", { responseType: 'arraybuffer' })
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
sourceUrl: 'https://atom.bio/als',
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
handler.help = ["play3"].map(v => v + " <búsqueda>")
handler.tags = ["downloader"]
handler.command = /^play3?$/i
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

/*import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Formato incorrecto*\nEjemplo:\n${usedPrefix + command} Mi corazón encantado`;
  try {
    let limit = 70;
    let ytse = await yts(text);
    let vid = ytse.all.find(v => v.type === "video");
    const q = '128kbps';
    const v = vid.url;
    const yt = await (async () => {
      try {
        return await youtubedl(v);
      } catch {
        return await youtubedlv2(v);
      }
    })();
    const dl_url = await yt.audio[q].download();
    const [ttl, size, getlinkxyz] = await Promise.all([
      yt.title,
      yt.audio[q].fileSizeH,
      getlink(dl_url),
    ]);

let play = `❒═════❬ 𝐏𝐋𝐀𝐘 ❭═════╾❒
├‣ *Nombre* :
┴
${vid.title}
┬
├‣ *Fuente* :
┴
${vid.url}
┬
├‣ *Tamaño* :
┴
${size}
┬
├‣ *Link* :
┴
${getlinkxyz}
┬
❒═══════════════╾❒`.trim();
conn.sendFile(m.chat, vid.thumbnail, '', play, m);
const buffer = await getBuffer(dl_url);
const bufferSize = buffer.byteLength;
if (bufferSize <= limit * 1024 * 1024) { 
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
} else {
if (bufferSize >= 180 * 1024 * 1024) { 
return m.reply(`El archivo supera el límite de tamaño de descarga (150 MB) y excede el límite de 180 MB como documento.`);
}
conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m });
}
} catch (error) {
}};
handler.help = ["play"].map(v => v + " <búsqueda>");
handler.tags = ["descargador"];
handler.command = /^play?$/i;
export default handler;

async function getlink(dl_url) {
try {
const baseURL = "https://drive.google.com/uc?export=download&id=";
const match = /\/d\/(.+?)\//.exec(dl_url);
const fileId = match[1];
const googleDriveLink = `${baseURL}${fileId}`;
return googleDriveLink;
} catch (error) {
return dl_url;
}}

async function getBuffer(url, options){
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}*/










/*import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Formato incorrecto*\nEjemplo:\n${usedPrefix + command} Mi corazón encantado`;
try {
let ytse = await yts(text);
let vid = ytse.all.find(v => v.type === "video"); 
const q = '128kbps';
const v = vid.url;
const yt = await (async () => {
try {
return await youtubedl(v);
} catch {
return await youtubedlv2(v);
}
})();
const dl_url = await yt.audio[q].download(); 
const [ttl, size, getlinkxyz] = await Promise.all([
yt.title,
yt.audio[q].fileSizeH,
getlink(dl_url), 
]);

let play = `❒═════❬ 𝐏𝐋𝐀𝐘 ❭═════╾❒
├‣ *Nombre* :
┴
${vid.title}
┬
├‣ *Fuente* :
┴
${vid.url}
┬
├‣ *Tamaño* :
┴
${size}
┬
├‣ *Link* :
┴
${getlinkxyz} 
┬
❒═══════════════╾❒`.trim();
conn.sendFile(m.chat, vid.thumbnail, '', play, m);
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
} catch (error) {
}};
handler.help = ["play"].map(v => v + " <búsqueda>");
handler.tags = ["descargador"];
handler.command = /^play?$/i;
export default handler;

async function getlink(dl_url) {
try {
const baseURL = "https://drive.google.com/uc?export=download&id=";
const match = /\/d\/(.+?)\//.exec(dl_url);
const fileId = match[1];
const googleDriveLink = `${baseURL}${fileId}`;
return googleDriveLink;
} catch (error) {
return dl_url;
}}*/













/*import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `*Formato incorrecto*\ningresa el nombre de la canción\nEjemplo:\n${usedPrefix + command} Mi corazón encantado`;

  let ytse = await yts(args.join(" "));
  let vid = ytse.all.find(v => v.type === "video");
  let play = `
*• Título:* ${vid.title}
*• Duración:* ${convertDuration(vid.timestamp)}
*• Vistas:* ${numberWithCommas(vid.views)}
*• Subido:* ${vid.ago}
*• Link*: ${vid.url}
`.trim();
  conn.sendMessage(m.chat, {
    text: play,
    contextInfo: {
      externalAdReply: {
        title: 'Descarga de Canciones',
        thumbnailUrl: 'https://i.ibb.co/2jycYt8/images-1-6.jpg',
        sourceUrl: 'http://youtube.com/@Kriz_Chaan',
        mediaType: 1,
      }
    }
  }, { quoted: m });

  try {
    let infoo = await ytdl.getInfo('https://youtu.be/' + vid.videoId);
    let ress = ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' });
    let thumbnail = vid.thumbnail;
    conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
      forwardingScore: 200,
      isForwarded: false,
      externalAdReply: {
        showAdAttribution: true,
        title: vid.title,
        body: null,
        mediaType: 2,
        sourceUrl: 'https://youtube.com/@KrizDavid_Fdz',
        thumbnail: await (await fetch(thumbnail)).buffer(),
      }
    } });
  } catch (error) {
  
  }
};
handler.help = ["play"].map(v => v + " <búsqueda>");
handler.tags = ["descargador"];
handler.command = /^play?$/i;
export default handler;

function convertDuration(duration) {
  if (!duration || duration.toLowerCase() === 'nan') return 'Desconocida';
  let seconds = duration.split(':').reverse().map((value, index) => parseInt(value) * Math.pow(60, index)).reduce((a, b) => a + b, 0);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `${hours > 0 ? hours + ' horas ' : ''}${minutes > 0 ? minutes + ' minutos ' : ''}${secs > 0 ? secs + ' segundos' : ''}`;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function timeSince(date) {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return interval + " años";
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + " meses";
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return interval + " días";
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return interval + " horas";
  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + " minutos";
  return Math.floor(seconds) + " segundos";
}*/
