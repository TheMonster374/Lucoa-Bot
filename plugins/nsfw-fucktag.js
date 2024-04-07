import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    
if (!text) throw `*Por favor, menciona el usuario*`;
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = 'https://telegra.ph/file/e427bf7e1e28350ff4c62.mp4' 
 let pp2 = 'https://telegra.ph/file/3cceebaf0fd97cbdcc074.mp4' 
 let pp3 = 'https://telegra.ph/file/efa64471182ca6d775c16.mp4'
 let pp4 = 'https://telegra.ph/file/0c442b3c3d9e14ca2d357.mp4'
 let pp5 = 'https://telegra.ph/file/19dffe718c967dfe357f6.mp4'
 let pp6 = 'https://telegra.ph/file/729e99a050bfc0cebc737.mp4'

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

    🤤¡${taguser} SE HA COGIDO A ${text}!🤤\n
😈¡${text}! *TE HA VIOLADO*😈\n
*¡QUE PUTA ERES!* 🥵
  
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
handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler;



/*import fetch from "node-fetch";

const handler = async (m, { conn, command, text }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    try {
        if (!text) throw `*Por favor, menciona el usuario al que quieres enviar el mensaje.*`;

        // URL de la API según el comando
        let apiUrl = 'https://nekos.pro/api';
        if (command == 'fuck') {
            apiUrl = 'https://nekos.pro/api/fucking';
        } 

        // Obtiene la imagen de la API
        let jkis = await (await fetch(apiUrl)).json();
        let { url } = jkis;

let fuck = `
🤤👅🥵 *🤤👅🥵 *TE HAS COGIDO A ${text}*🥵👅🤤
*¡${text}!* TE HAN VIOLADO 😈
🤤🥵 *¡QUE PERRA ERES* 🥵🤤
`.trim(); // Envía la imagen obtenida de la API
        conn.sendFile(m.chat, url, '', fuck, m, false, { mimetype: 'image/jpeg' }, { mentions: conn.parseMention(fuck) }); // Ajusta el mimetype según el tipo de archivo que obtienes de la API

    } catch (e) {
      throw e;
    }
};

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler;
*/
