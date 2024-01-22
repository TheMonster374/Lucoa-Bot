const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola 👋🏻 u Mi Nombre es jotchuabot Bienvenid@ a mi menu
  
╭──────────────────╮
*➼✰︙ 𝑻𝑼 𝑰𝑵𝑭𝑶* 
╰──────────────────╯
┋✧⃝👤͙ *Nombre:* 
┋✧⃝👤͙ *Numero:* ${m.sender.split('@')[0]}

╭──────────────────╮
*➼✰︙𝑪𝑹𝑬𝑨𝑫𝑶𝑹 - 𝑶𝑾𝑵𝑬𝑹*
╰──────────────────╯
┋ ⋆⃟⋆⃟🍒 listachat
┋ ⋆⃟⋆⃟🍒 listagrupo
┋ ⋆⃟⋆⃟🍒 public
┋ ⋆⃟⋆⃟🍒 self
┋ ⋆⃟⋆⃟🍒 myip
┋ ⋆⃟⋆⃟🍒 chat
┋ ⋆⃟⋆⃟🍒 reac
┋ ⋆⃟⋆⃟🍒 join
┋ ⋆⃟⋆⃟🍒 salir
┋ ⋆⃟⋆⃟🍒 wm
┋ ⋆⃟⋆⃟🍒 block
┋ ⋆⃟⋆⃟🍒 unblock

■██■▰▱▰▱▰▱■██■
*┏ೋ━ೋ✧ೋ━ೋ┓*
     *🌠 𝑲𝑹𝑰𝒁𝑪𝑯𝑨𝑨𝑵 🌠*
*┗ೋ━ೋ✧ೋ━ೋ┛*
*■██■▰▱▰▱▰▱■██■`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'}},
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
handler.command = /^(prueba|creator|creador|propietario)$/i;
export default handler;
