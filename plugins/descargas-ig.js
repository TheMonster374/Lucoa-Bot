import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {fileTypeFromBuffer} from 'file-type';
const handler = async (m, {conn, args, command, usedPrefix}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!args[0]) return conn.reply(m.chat, `*ingresa un enlace de instagram`, fkontak, m)
  conn.reply(m.chat, `*[❗] ᴅᴇsᴄᴀʀɢᴀɴᴅᴏ sᴜ ᴠɪᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴛᴇ ᴘʀᴏᴄᴇsᴏ ᴘᴜᴇᴅᴇ ᴅᴜʀᴀʀ ᴇɴᴛʀᴇ 2 ʏ 10 ᴍɪɴᴜᴛᴏs ᴅᴇᴘᴇɴᴅɪᴇɴᴅᴏ ᴅᴇ ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ᴠɪᴅᴇᴏ...*`, fkontak, m)
  try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
    const bufferInfo = await getBuffer(img[i].download_link);
        if (bufferInfo.detectedType.mime.startsWith('image/')) {
            await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
        } else if (bufferInfo.detectedType.mime.startsWith('video/')) {
            await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
        }
}
  } catch {   
  try {
    const datTa = await instagram.download(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = `aqui tienes🐶`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `aqui tienes🐶`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `aqui tienes🐶`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `aqui tienes🐶`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            throw `*ha habido un error y no se envio el video*`;
          }
        }
      }
    }
  }
};
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
handler.limit = 2
export default handler;

const getBuffer = async (url, options) => {
    options = options || {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'});
    const buffer = Buffer.from(res.data, 'binary');
    const detectedType = await fileTypeFromBuffer(buffer);
    if (!detectedType || (detectedType.mime !== 'image/jpeg' && detectedType.mime !== 'image/png' && detectedType.mime !== 'video/mp4')) {
        return null;
    }
    return { buffer, detectedType };
};
