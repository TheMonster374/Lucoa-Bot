const handler = async (m, {conn, usedPrefix}) => {
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `  _*ɪɴꜰᴏ ᴜꜱᴜᴀʀɪᴏ*_
_*ɴᴏᴍʙʀᴇ​*_ : ${taguser}
_*ᴅɪᴀᴍᴀɴᴛᴇꜱ​*_ : ${user.limit}
_*​ɴɪᴠᴇʟ​*_ : ${user.level}
_*​xᴘ*_ : ${user.exp}
_*​ᴘʀᴇᴍɪᴜᴍ​*_ : ${user.premiumTime > 0 ? '✅' : (user.isPrems ? '✅' : '❌') || ''}
 

╭─────────────┈⊷
│「 _*ɪɴꜰᴏ ʙᴏᴛ*_ 」  
╰────────────┈⊷  
       

🐶͘͜  _repo | repositorio_
🐶͘͜  _estado_
🐶͘͜  _grupos | gruposjt_
🐶͘͜  _dash | dashboard_
🐶͘͜  _speedtest_
🐶͘͜  _instalarbot | infoinstalar_
🐶͘͜  bot/sub bot: ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Este es el Bot oficial'}

 ${readMore}
╭─────────────┈⊷
│ 「 _*ᴍᴇɴᴜꜱ*_ 」
╰────────────┈⊷            
🐶͘͜  _MenuPorn | porn_
🐶͘͜  _menuanimes | animes_
🐶͘͜  _menuaudios | audios_
🐶͘͜  _MenuCreador_
🐶͘͜  _MenuDescargas | Descargas_
🐶͘͜  _MenuRPG | RPG_

${readMore}
╭─────────────┈⊷
│ 「 _*ᴀᴄᴄɪᴏɴᴇꜱ*_ 」
╰────────────┈⊷
       
🐶͘͜  _kiss_
🐶͘͜  _slap_
🐶͘͜  _pat_
🐶͘͜  _dado_

╭─────────────┈⊷
│「 _*ɪᴀ/ʙᴏᴛ*_ 」
╰────────────┈⊷

🐶͘͜  _bot_
🐶͘͜  _iaimagen


╭─────────────┈⊷
│「 _*ᴍᴇɴꜱᴀᴊᴇꜱ ᴇɴ ᴇꜱᴘᴇʀᴀ*_ 」
╰────────────┈⊷

🐶͘͜  _reporte *<texto>*_
🐶͘͜  _fixmsgespera_
⟼ Mensajes en espera

 ${readMore}
╭─────────────┈⊷
│「 _*ᴜɴᴇ ᴇʟ ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ*_ 」
╰────────────┈⊷
╭──────────────── 
│🐶͘͜  _join *<enlace / link / url>*_
╰────────────────
 ${readMore}
╭─────────────┈⊷
│「 _*ꜱᴇʀʙᴏᴛ - ᴊᴀᴅɪʙᴏᴛ*_ 」
╰────────────┈⊷    

🐶͘͜  _serbot_
🐶͘͜  _serbot --code_
🐶͘͜  _token_
🐶͘͜  _bots_
(si quiere sacar el subbot vaya 
a dispositivos vinculados y cierre la sesion)


╭─────────────┈⊷
│「 _*ᴇɴᴀʙʟᴇ / ᴅɪꜱᴀʙʟᴇ*_ 」
╰────────────┈⊷     

🐶͘͜  _enable_
🐶͘͜  _disable_

╭─────────────┈⊷
│「 _*ᴊᴜᴇɢᴏꜱ*_ 」
╰────────────┈⊷  

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua-Bot`},
    'mimetype': `application/${document}`,
    'fileName': `𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua-Bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://github.com/AleXD0009/Jotchua-Bot.git'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(prueba|creator|creador|propietario)$/i;
export default handler;
