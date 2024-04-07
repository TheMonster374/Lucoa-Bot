import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `*Por favor, menciona el usuario*`;
    if (usedPrefix == 'a' || usedPrefix == 'A') return;

let pp = "https://cdn.nekos.life/kiss/kiss_024.gif"
let pp2 = "https://cdn.nekos.life/kiss/kiss_051.gif"
let pp3 = "https://cdn.nekos.life/kiss/kiss_097.gif"
let pp4 = "https://cdn.nekos.life/kiss/kiss_083.gif"
let pp5 = "https://cdn.nekos.life/kiss/kiss_081.gif"
let pp6 = "https://cdn.nekos.life/kiss/kiss_137.gif"

try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
    _${taguser} HA BESADO A ${text} 😳💋_
   
    `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado*', m);
  }
};
handler.help = ['kiss'].map((v) => v + ' <@usuario>');
handler.tags = ['fun'];
handler.command = /^(kiss)$/i;
handler.register = true;

export default handler;
/*import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `*Por favor, menciona el usuario*`;
    if (usedPrefix == 'a' || usedPrefix == 'A') return;

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let mentionedJid = [who];
    let username = conn.getName(who);

    try {
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
        const str = `_${taguser} HA BESADO A ${text} 😳💋_`;
        const apiURL = 'https://api.otakugifs.xyz/gif?reaction=kiss&format=gif';
        const response = await fetch(apiURL);
        const gifData = await response.json();
        const pp = gifData.url;

        if (m.isGroup) {
            conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
        } else {
            const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
            conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
        }
    } catch {
        conn.reply(m.chat, '*[❌] ocurrió un error inesperado*', m);
    }
};

handler.help = ['kiss'].map((v) => v + ' <@usuario>');
handler.tags = ['fun'];
handler.command = /^(kiss)$/i;
handler.register = true;

export default handler;


import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn}) => {
try {   
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `⚠️ *_Etiquete o mencione a alguien._*\n\n*📌 Ejemplo* : ${usedPrefix + command} @tag` 
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `${name2} le dio besos a`, `${name}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
} catch (e) { }}
handler.help = ['kiss *<@user>*']
handler.tags = ['sticker']
handler.command = /^(kiss|skiss|kis|besos|beso)$/i
export default handler*/
