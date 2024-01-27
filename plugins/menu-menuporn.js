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
╭─────────────┈⊷
│  — *_𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭_* —
╰┬────────────┈⊷
┌┤
┌┤𝗛ola, ${taguser}* Espero que 
┌┤tengas un lindo dia o noche 🐕
┌┤
┌┤「 𝐌𝐄𝐍𝐔 +𝟏𝟖 」
┌┤      
┌┤_${usedPrefix}ᴘᴀᴄᴋ_
┌┤_${usedPrefix}ᴘᴀᴄᴋ2
┌┤_${usedPrefix}ᴘᴀᴄᴋ3_
┌┤_${usedPrefix}xvideosdl_
┌┤_${usedPrefix}xnxxsearch_
┌┤_${usedPrefix}xnxxsearch2_
┌┤_${usedPrefix}ᴠɪᴅᴇᴏxxx_
┌┤_${usedPrefix}ᴠɪᴅᴇᴏʟᴇꜱʙɪxxx_
┌┤_${usedPrefix}ᴛᴇᴛᴀꜱ_
┌┤_${usedPrefix}ʙᴏᴏᴛʏ_
┌┤_${usedPrefix}ᴇᴄᴄʜɪ_
┌┤_${usedPrefix}ɪᴍᴀɢᴇɴʟᴇꜱʙɪᴀɴꜱ_
┌┤_${usedPrefix}panties_
┌┤_${usedPrefix}porno_
┌┤_${usedPrefix}randomxxx_
┌┤_${usedPrefix}pechos_
┌┤_${usedPrefix}yuri_
┌┤_${usedPrefix}yuri2_ 
┌┤_${usedPrefix}trapito_
┌┤_${usedPrefix}rule34_
┌┤_${usedPrefix}hentai_
┌┤_${usedPrefix}xneko_
┌┤_${usedPrefix}xwaifu_
┌┤_${usedPrefix}hentai2_
┌┤_${usedPrefix}nsfwloli_
┌┤_${usedPrefix}nsfworgy_
┌┤_${usedPrefix}nsfwfoot_
┌┤_${usedPrefix}nsfwass_
┌┤_${usedPrefix}nsfwbdsm_
┌┤_${usedPrefix}nsfwcum_
┌┤_${usedPrefix}nsfwfemdom_
┌┤_${usedPrefix}nsfwero_
┌┤_${usedPrefix}nsfwglass_
┌┤_${usedPrefix}hentaipdf *<texto>*_
┌┤_${usedPrefix}hentaisearch *<texto>*_
╰┬────────────┈⊷`.trim();
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
handler.command = /^(menuporn|porn|MenuPorn)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
