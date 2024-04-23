import fetch from "node-fetch";
import {createHash} from 'crypto';

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let handler = async (m, {conn, usedPrefix, text}) => {
  const sn = createHash('md5').update(m.sender).digest('hex');

  conn.reply(m.chat, `
*_Tu Numero de serie es:_*  ${sn}`, fkontak, 
{contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `GRUPO DE WHATSAPP`,
body: `🤍 Unete al grupo OFC`,
mediaType: 1,
sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
}

handler.help = ['myns'];
handler.tags = ['rg'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
