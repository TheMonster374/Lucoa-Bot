let handler = async (m, {conn, command}) => {
      let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
   if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝";
    } else {
      name = conn.getName(who);
    }
  }
      
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( m.chat, url, "gimage.mp4", `${name2} le dio una bofetada a ${name}`.trim(), m)
};
handler.help = ["test"];
//handler.tags = ["img"];
handler.command = /^(test)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/34bee857728694a51d6fd.mp4",
];
