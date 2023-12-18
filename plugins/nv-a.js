const handler = async (m, {conn}) => {
  if (!db.data.chats[m.chat].audios) return;
  if (!db.data.settings[conn.user.jid].audios_bot && !m.isGroup) return;
  //const s = seconds: '1934.4'
  const vn = './media/a.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3`}, {quoted: m});
};
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler;

/*
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Jotchua-Bot`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://github.com/AleXD0009/Jotchua`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler
*/
