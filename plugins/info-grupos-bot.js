const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝑯𝒐𝒍𝒂 𝑼𝒔𝒖𝒂𝒓𝒊𝒐, 𝒕𝒆 𝒊𝒏𝒗𝒊𝒕𝒐 𝒂 𝒖𝒏𝒊𝒓𝒕𝒆 𝒂 𝒍𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔 𝒅𝒆 𝒋𝒐𝒕𝒄𝒉𝒖𝒂 - 𝒃𝒐𝒕 - 𝒎𝒊𝒏𝒊 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒗𝒊𝒗𝒊𝒓 𝒄𝒐𝒏 𝒍𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅
${JT.smsGruposBot}

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
        'thumbnail': 'https://telegra.ph/file/e67bf7d4ef5d36b3e3b63.jpg',
        'sourceUrl': 'nn'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['grupos']
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
