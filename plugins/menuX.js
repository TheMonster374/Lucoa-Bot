import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const m = { 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
  let txt =`╭
┋ 
┋ 
┋ 
┋ 
┋ 
╰◆━━━━━━◆❃◆━━━━━━◆
`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": 'Jotchua-Bot', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen3,imagen1,imagen4].getRandom(), "mediaUrl": md, "sourceUrl": md}}}, {quoted: m});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬el menu tiene un error.', m);
  }
};
handler.help = ['menuX'];
handler.tags = ['main'];
handler.command = /^(menuX|allmenuX|menúX|helpX|ayudaX)$/i;
export default handler;
