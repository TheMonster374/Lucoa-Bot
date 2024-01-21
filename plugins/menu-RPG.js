import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
╭─═[𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀]═──⋆
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}adventure_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cazar_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cofre_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}balance_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}claim_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}heal_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}lb_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}levelup_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}myns_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}perfil_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}work_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}minar_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}minar2_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}buy_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}buyall_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}verificar_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}robar *<cant> <@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}unreg *<sn>*_
╰───────────═┅═──────────`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*el menu tiene un error y no fue posible enviarse*', m);
  }
};
handler.command = /^(menuRPG|RPG)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
