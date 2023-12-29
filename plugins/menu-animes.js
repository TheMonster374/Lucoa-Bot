import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
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
     *_𝐣𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭_* 

 𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕


   「 𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄 」

│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}lolivid_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}loli_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ppcouple_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}neko_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}waifu_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}akira_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}akiyama_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}anna_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}asuna_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ayuzawa_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}boruto_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}chiho_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}chitoge_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}deidara_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}erza_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}elaina_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}eba_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}emilia_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hestia_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hinata_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}inori_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}isuzu_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}itachi_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}itori_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kaga_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kagura_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kaori_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}keneki_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kotori_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kurumi_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}madara_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}mikasa_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}miku_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}minato_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}naruto_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nezuko_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sagiri_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sasuke_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sakura_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cosplay_`.trim();
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
    conn.reply(m.chat, '*_𝐄𝐋 𝐌𝐄𝐍𝐔 𝐓𝐈𝐄𝐍𝐄 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐘 𝐍𝐎 𝐄𝐒 𝐏𝐎𝐒𝐈𝐁𝐋𝐄 𝐄𝐍𝐕𝐈𝐀𝐑𝐋𝐎, 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐋𝐎 𝐀𝐋 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓_*', m);
  }
};
handler.command = /^(animes|menuanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
