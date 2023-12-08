const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝘦𝘭 𝘯𝘶𝘮𝘦𝘳𝘰 𝘥𝘦 𝘮𝘪 𝘤𝘦𝘢𝘥𝘰𝘳 𝘦𝘴 wa.me/5491156673266**`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝘉𝘺 𝘈𝘓𝘚 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'Bot Modificado por ALS⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/HNKEbPvDwhz2OpMA6Ui7jM'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
