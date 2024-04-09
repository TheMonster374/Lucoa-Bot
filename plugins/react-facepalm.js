import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = "https://telegra.ph/file/6d38109488d6cadf78da4.mp4"
let pp2 = "https://telegra.ph/file/9dad613ca7b757a738718.mp4"
let pp3 = "https://telegra.ph/file/71febbe70e132441d604c.mp4"
let pp4 = "https://telegra.ph/file/712d351d2c5d74eb54f7d.mp4"
let pp5 = "https://telegra.ph/file/96116bfc6497bd38e713c.mp4"

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

        _${taguser} SE HA FRUSTRADO 😖🤦‍♂️_
 
  
    `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado*', m);
  }
};
handler.help = ['facepalm']
handler.tags = ['react'];
handler.command = /^(facepalm)$/i;
handler.register = true;
export default handler;


