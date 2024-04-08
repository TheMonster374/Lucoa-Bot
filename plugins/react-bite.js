import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    
if (!text) throw `*Por favor, menciona el usuario*`;
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = "https://telegra.ph/file/634797ffc1f7af686792e.mp4"
let pp2 = "https://telegra.ph/file/a2c06ed27d4bc627acd4a.mp4"
let pp3 = "https://telegra.ph/file/4c8497409590e91b3013c.mp4"
let pp4 = "https://telegra.ph/file/fc367704f8010c48a1c6f.mp4"
let pp5 = "https://telegra.ph/file/f244dccee065941cb9b7a.mp4"
let pp6 = "https://telegra.ph/file/ade5058b9b299245722e7.mp4"

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

        _${taguser} HA MORDIDO A ${text} 😲😱_
 
  
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
handler.help = ['bite'].map((v) => v + ' <@usuario>');
handler.tags = ['react'];
handler.command = /^(bite)$/i;
handler.register = true;
export default handler;


                                                
