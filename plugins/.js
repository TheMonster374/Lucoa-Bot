let handler = async (m, { conn, args, usedPrefix, command }) => {
  const notStickerMessage = `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝙸𝙼𝙰𝙶𝙴𝙽 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}*`;
  if (!m.quoted) throw notStickerMessage;
  let stiker = false
  let username = conn.getName(m.sender)
  try {
    try {
      if (m.quoted && m.quoted.mtype == 'stickerMessage') {
        const media = await client.downloadMediaMessage(m.quoted)
        await client.sendMessage(
          m.chat,
          { image: media, jpegThumbnail: media },
          { quoted: m }
        )
      } else {
        m.reply('◦ Responde un sticker.')
      }
    } catch (error) {
      m.reply(util.format(error))
      console.log(error)
    }
  }
}
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
export default handler;
