const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola Usuario, te invito a unirte a los grupos de jotchua - bot - mini para convivir con la comunidad :D*

ɢʀᴜᴘᴏꜱ ᴅᴇ ᴊᴏᴛᴄʜᴜᴀ-ʙᴏᴛ-ᴍɪɴɪ:
 ⎯⎯  \\\ 𝕭𝖔𝖙𝖘 /// ⎯⎯                 
https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB 


ɢʀᴜᴘᴏꜱ ᴄᴏʟᴀʙ ᴊᴏᴛᴄʜᴜᴀ-ʙᴏᴛ-ᴍɪɴɪ:
𝐙𝐚𝐦𝐚𝐬𝐮 - 𝐛𝐨𝐭 | 𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭: https://chat.whatsapp.com/F9y0tUxJWaLC7KpmGiLiS8

𝐓𝐫𝐲𝐳𝐞𝐫-𝐁𝐨𝐭 𝐲 𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭🐶:
sin link pq no me pasan el link 😥

 si quieres que tu grupo aparezca o colaborar con el bot contacta con mi creador


`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009`},
    'mimetype': `application/${document}`,
    'fileName': `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ - ᴍɪɴɪ`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ - ᴍɪɴɪ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['grupos']
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
