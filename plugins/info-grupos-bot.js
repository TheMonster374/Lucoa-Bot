const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `Hola, estos son los grupos de jotchua-Mini
┏━━━━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━━━━┓

𝐽𝑜𝑡𝑐ℎ𝑢𝑎 • 𝑀𝑖𝑛𝑖 | 𝑶𝑭𝑪
https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np

 ⎯⎯  \\\ 𝕭𝖔𝖙𝖘🤖 /// ⎯⎯                 
https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB 

━━━━━━━━━━━━━━━━━━━━━━━━━━

𝑮𝒓𝒖𝒑𝒐𝒔 𝑪𝒐𝒍𝒂𝒃 𝒅𝒆 𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊:


𝑴𝒖𝒍𝒕𝒊 𝑩𝒐𝒕𝒔 | 𝑫𝒓𝒆𝒂𝒎 𝑻𝒆𝒂𝒎
https://chat.whatsapp.com/H0ijohqwDcxJ9vbWx0lGiy



 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒒𝒖𝒆 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒂𝒑𝒂𝒓𝒆𝒛𝒄𝒂 𝒐 𝒄𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓
┗━━━━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━━━━┛
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009`},
    'mimetype': `application/${document}`,
    'fileName': `𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊⁩',
        'body': wm,
        'thumbnail': catalogo,
        'sourceUrl': 'md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['grupos']
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
