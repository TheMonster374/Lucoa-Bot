import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐌𝐞𝐧𝐮🐶.',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭', body: 'BY als', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`
╭─────────────┈
│╭─────────────┈⊷
││「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  
│╰────────────┈⊷  
│ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
│ _ComandosNuevos_
│ _Nuevo_
│
│╭────────────────
││𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
││𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |
│╰────────────────         
│╭────────────────     
││🐶͘͜  _owner | creador_
││🐶͘͜  _repo | repositorio_
││🐶͘͜  _estado_
││🐶͘͜  _grupos | gruposjt_
││🐶͘͜  _dash | dashboard_
││🐶͘͜  _speedtest_
││🐶͘͜  _instalarbot | infoinstalar_
│╰────────────────  
│ 
│
│╭─────────────┈⊷
││ 「 𝐌𝐄𝐍𝐔𝐒 」
│╰────────────┈⊷            
│╭────────────────            
││🐶͘͜  _MenuPorn | porn_
││
││🐶͘͜  _menuanimes | animes_
││
││🐶͘͜  _menuaudios | audios_
││
││🐶͘͜  _MenuCreador_
││
││🐶͘͜  _MenuDescargas | Descargas_
││
││🐶͘͜  _MenuRPG | RPG_
│╰────────────────
│ `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭🐶', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: fkon});
 // m.react('🐶');
  } catch {
    conn.reply(m.chat, 'ha habido un error en enviar el menu.', m);
  }
};
handler.command = /^(test|Test)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
