//Código By Monster

import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
global.img8 = fs.readFileSync ('./Requisitos.mp4');
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = img8
    const img = './Requisitos.mp4';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const totalusr = Object.keys(global.db.data.users).length;
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
  *✨¡ℍ𝕠𝕝𝕒 ${taguser}!*
>------------[🤍]-------------<
Para que *_INABAKUMORI-Bot [🤍]:_* se una a tu grupo debes cumplir con los siguientes requisitos:

1. Seguir el canal oficial de *_INABAKUMORI-Bot [🤍]:_* https://whatsapp.com/channel/0029VaPhM3S3wtbBXOzf6t0j

2. Unirte al grupo oficial de *_INABAKUMORI-Bot [🤍]:_* https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc

3. *(Opcional)* Realizar una donación de 1 a mi Paypal: https://paypal.me/monster373505?country.x=CO&locale.x=es_XC

_Una vez cumplido los requisitos *envía captura a mi creador para verificar* (escribe que quieres que me una a tu grupo y *".owner"*, el bot enviará el contacto de mi creador_

> *_✨Nota:_*                                              _-Si te sales del grupo o dejas de seguir el canal, el BOT SE SALDRÁ DEL GRUPO_


 `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      /*conn.sendMessage(m.chat, {video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } */
      conn.sendMessage(m.chat, { video: pp, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
        }else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
     /* conn.sendMessage(m.chat, {video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    */ conn.sendMessage(m.chat, { video: pp, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado al enviar el menu*', m);
  }
};
handler.command = /^(requisitos)$/i;
handler.tags = ['main']
handler.help = ['requisitos']
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
