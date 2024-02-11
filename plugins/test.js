import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*enviando menu.*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '¡𝐇𝐨𝐥𝐚!', body: 'Qᴜᴇ ᴛᴇɴɢᴀꜱ ʟɪɴᴅᴏ ᴅɪᴀ', sourceUrl: null, thumbnail: await (await fetch(pp)).buffer() }}})
    await conn.sendMessage(m.chat, { react: { text: '🐕', key: m.key } })
  let txt =`
╭◈
┃
╰◈`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": null, "renderLargerThumbnail": null, "title": 'jotchua-bot', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": null, "sourceUrl": null}}}, {quoted: m});
  } catch {
    conn.reply(m.chat, '⚠️ 𝐞𝐥 𝐦𝐞𝐧𝐮 𝐭𝐢𝐞𝐧𝐞 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuX)$/i;
export default handler;
