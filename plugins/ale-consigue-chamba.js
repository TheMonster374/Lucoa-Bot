import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: catalogo ,sendEphemeral: true}}};
    await conn.reply(m.chat, 'menu para la secu 😨.',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'ale te van a poner a chambear', body: 'menu para el ale', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '📚', key: m.key } })
  let txt =`
╭─────────────┈
│ 
│╭─────────────┈⊷
││𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 
│╰────────────┈⊷     
│╭────────────────      
││_githubsearch *<texto>*_
││_pelisplus *<texto>*_
││_modapk *<texto>*_
││_stickersearch *<texto>*_
││_stickersearch2 *<texto>*_
││_animeinfo *<texto>*_
││_google *<texto>*_
││_letra *<texto>*_
││_wikipedia *<texto>*_
││_ytsearch *<texto>*_
││_playstore *<texto>*_
│╰────────────────
│╭─────────────┈⊷
││IMAGENES
│╰────────────┈⊷     
│
╰────────────────`;
    await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": 'ale consigue chamba', "containsAutoReply": true, "mediaType": 1, "thumbnail": [catalogo,imagen1].getRandom(), "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: fkon});
 // m.react('🐶');
  } catch {
    conn.reply(m.chat, 'ha habido un error en enviar el menu.', m);
  }
};
handler.command = /^(a|XD)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
