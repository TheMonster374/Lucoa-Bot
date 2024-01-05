const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `
------------------------------------
tutorial termux
> https://youtu.be/yRS4m36Zwkw

------------------------------------

*comandos termux*
> Comandos:
- cd && termux-setup-storage
- apt-get update -y && apt-get upgrade -y
- pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
- git clone https://github.com/AleXD0009/Jotchua-Bot.git && cd Jotchua-Bot
- yarn install
- npm install
- npm update
- npm start
NOTA: en caso de no funcionar intentar con yarn y luego npm start
------------------------------------

*activar en caso de detenerse en termux*
escibre los siguientes comandos uno por uno
> cd Jotchua-Bot
> npm start

------------------------------------

*obtener otro codigo en termux*
escribe los comandos uno por uno:
> cd Jotchua-Bot
> rm -rf MysticSession
> npm start`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua-Bot`},
    'mimetype': `application/${document}`,
    'fileName': `「 Jotchua-Bot 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua-Bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://github.com/AleXD0009'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'infoinstalar'];
export default handler;
