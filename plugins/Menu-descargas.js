import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen9
    const img = './storage/img/menus/Menu6.mp4';
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
 const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))



let uptime = `${clockString(process.uptime())}`
const str = `
    > ℍ𝕠𝕝𝕒 *${taguser}*, 𝕊𝕠𝕪 𝕃𝕦𝕔𝕠𝕒
  
┏━☋ ꕥ *👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢* ꕥ
┃➥🐲 *𝘕𝘰𝘮𝘣𝘳𝘦* : ${taguser}
┃➥💎 *𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴* : ${limit}
┃➥🏆 *𝘕𝘪𝘷𝘦𝘭* : ${level}
┃➥💴 *𝘠𝘦𝘯𝘦𝘴* : ${money}
┗━━━━━━━━━━━━━☊
 ${readMore}
┏━☋ ꕥ *🐲 𝗟𝗨𝗖𝗢𝗔-𝗕𝗢𝗧* ꕥ
┃➥🧁 *𝘊𝘳𝘦𝘢𝘥𝘰𝘳*: ${ow2}
┃➥👤 *𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴* : ${totalusr}
┃➥🕘 *𝘈𝘤𝘵𝘪𝘷𝘢* : ${uptime}
┃➥✨ *𝘛𝘰𝘵𝘢𝘭 𝘨𝘳𝘶𝘱𝘰𝘴* : ${groupsIn.length}
┗━━━━━━━━━━━━━☊
 ${readMore}
 

❥━☋ 《ᴅᴇꜱᴄᴀʀɢᴀꜱ》🔽
╭─────────────···
┃➽ _${usedPrefix}fb <link>_
┃➽ _${usedPrefix}apk_
┃➽ _${usedPrefix}gitclone_
┃➽ _${usedPrefix}igstory <username>_
┃➽ _${usedPrefix}instagram_
┃➽ _${usedPrefix}mediafire_
┃➽ _${usedPrefix}mega_
┃➽ _${usedPrefix}play <búsqueda>_
┃➽ _${usedPrefix}play1 < busqueda >_
┃➽ _${usedPrefix}play2 < busqueda >_
┃➽ _${usedPrefix}play3 <formato> <búsqueda>_
┃➽ _${usedPrefix}soundcloud_
┃➽ _${usedPrefix}spotify <texto>_
┃➽ _${usedPrefix}spotifydl *<texto>*_
┃➽ _${usedPrefix}tiktok_
┃➽ _${usedPrefix}x (twitter)_
┃➽ _${usedPrefix}videodoc_
┃➽ _${usedPrefix}yta <yt url>_
┃➽ _${usedPrefix}ytv <yt url>_
╰─────────────···
❥━━━━━━━━━━━━━☊
                                    


`.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
     conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat,  { video: { url: pp }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '[❌] ERROR \n\n El menu tiene un error', m);
  }

};
handler.command = /^(menudescargas|MenuDescargas|MENUDESCARGAS)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
