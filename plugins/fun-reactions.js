import fetch from 'node-fetch';

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
            conn.sendMessage(m.chat, { video: { url: pp }, mimetype: 'image/gif', gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
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
