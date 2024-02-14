const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola Usuario, te invito a unirte a los grupos de jotchua - bot - mini para convivir con la comunidad :D*
┏━━━━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━━━━┓
𝑮𝒓𝒖𝒑𝒐𝒔 𝒅𝒆 𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊:
 ⎯⎯  \\\ 𝕭𝖔𝖙𝖘 /// ⎯⎯                 
https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB 

━━━━━━━━━━━━━━━━━━━━━━━━━━

𝑮𝒓𝒖𝒑𝒐𝒔 𝑪𝒐𝒍𝒂𝒃 𝒅𝒆 𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊:
𝐙𝐚𝐦𝐚𝐬𝐮 - 𝐛𝐨𝐭 | 𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭:
https://chat.whatsapp.com/F9y0tUxJWaLC7KpmGiLiS8

𝐓𝐫𝐲𝐳𝐞𝐫-𝐁𝐨𝐭 𝐲 𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭🐶:
sin link pq no me pasan el link 😥

 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒒𝒖𝒆 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒂𝒑𝒂𝒓𝒆𝒛𝒄𝒂 𝒐 𝒄 𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓
┗━━━━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━━━━┛

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
