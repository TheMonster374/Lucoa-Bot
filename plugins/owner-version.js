import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    
if (!text) throw `*Por favor, escribe un número*`;
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = "https://telegra.ph/file/9c0fbc6b219e40cc3bd42.jpg"
let pp2 = "https://telegra.ph/file/5752996decc6b4301aec9.jpg"

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*✨ ¡LA ACTUALIZACION [${text}] HA LLEGADO! ✨*

_Notas de la versión:_
> ⓘ Canal de WhatsApp 

✨𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒐𝒄𝒆𝒓 𝒍𝒂𝒔 𝒇𝒖𝒕𝒖𝒓𝒂𝒔 𝒚 𝒓𝒆𝒄𝒊𝒆𝒏𝒕𝒆𝒔 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒆𝒔, 𝑺𝒊𝒈𝒖𝒆 𝒆𝒍 𝒄𝒂𝒏𝒂𝒍 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒅𝒆 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 [🤍]:
 https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t

*✨GRUPO OFICIAL✨:*
https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc

*GRUPO SIN REGLAS 😈:*
https://chat.whatsapp.com/G7yw7ilDYm0JfUOerplf9V

*🤍 DONACIONES 🤍:*
https://paypal.me/monster373505?country.x=CO&locale.x=es_XC
 
  
    `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { image: { url: [pp, pp2].getRandom() }, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { image: { url: [pp, pp2].getRandom() }, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado*', m);
  }
};
handler.help = ['upt'].map((v) => v + ' [versión]');
handler.tags = ['owner'];
handler.command = /^(upt)$/i;
handler.owner = true;
export default handler;


        
