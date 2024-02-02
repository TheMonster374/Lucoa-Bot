const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola Usuario, te invito a unirte a los grupos de jotchua - bot para convivir con la comunidad :D*

       「 𝐆𝐫𝐮𝐩𝐨𝐬 𝐃𝐞𝐥 𝐁𝐨𝐭 」
       
*1.-* https://chat.whatsapp.com/LpZl6HC1iD3KfoYfDkyjbJ ⎯⎯  \\\ 𝕭𝖔𝖙𝖘 /// ⎯⎯


`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua-Bot`},
    'mimetype': `application/${document}`,
    'fileName': `「  By ALS 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua-Bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙹𝚘𝚝𝚌𝚑𝚞𝚊 - 𝙱𝚘𝚝⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/LpZl6HC1iD3KfoYfDkyjbJ'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
