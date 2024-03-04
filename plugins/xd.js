import yts from 'yt-search';
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
handler.command = /^A?$/i;
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
}
