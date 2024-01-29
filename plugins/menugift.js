import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try { 
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


   「 ༯⃢༯⃢☬𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄༯⃢༯⃢☬ 」
   
🐶_${usedPrefix}animelink_
│🐶͘͜  _${usedPrefix}lolivid_
│🐶͘͜  _${usedPrefix}loli_
│🐶͘͜  _${usedPrefix}ppcouple_
│🐶͘͜  _${usedPrefix}neko_
│🐶͘͜  _${usedPrefix}waifu_
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
 let pp = 'https://telegra.ph/file/4c3e4b782c82511b3874d.mp4'
    let pp2 = 'https://telegra.ph/file/d8c5e18ab0cfc10511f63.mp4'
    let pp3 = 'https://telegra.ph/file/96e471a87971e2fb4955f.mp4'
    let pp4 = 'https://telegra.ph/file/09b920486c3c291f5a9e6.mp4'
    let pp5 = 'https://telegra.ph/file/4948429d0ab0212e9000f.mp4'
    let pp6 = 'https://telegra.ph/file/cab0bf344ba83d79c1a47.mp4'
    let pp7 = 'https://telegra.ph/file/6d89bd150ad55db50e332.mp4'
    let pp8 = 'https://telegra.ph/file/e2f791011e8d183bd6b50.mp4'
    let pp9 = 'https://telegra.ph/file/546a6a2101423efcce4bd.mp4'
    let pp10 = 'https://telegra.ph/file/930b9fddde1034360fd86.mp4'
    let pp11 = 'https://telegra.ph/file/81da492e08bfdb4fda695.mp4'
    let pp12 = 'https://telegra.ph/file/ec8393df422d40f923e00.mp4'
    let pp13 = 'https://telegra.ph/file/ba7c4a3eb7bf3d892b0c8.mp4'
    let pp14 = 'https://tinyurl.com/ymlqb6ml'
    let pp15 = 'https://tinyurl.com/ykv7g4zy'
    conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })
    }
  } catch {
    conn.reply(m.chat, '*_𝐄𝐋 𝐌𝐄𝐍𝐔 𝐓𝐈𝐄𝐍𝐄 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐘 𝐍𝐎 𝐄𝐒 𝐏𝐎𝐒𝐈𝐁𝐋𝐄 𝐄𝐍𝐕𝐈𝐀𝐑𝐋𝐎, 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐋𝐎 𝐀𝐋 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓_*', m);
  }
};
handler.command = /^(Gift|MenuGift)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
