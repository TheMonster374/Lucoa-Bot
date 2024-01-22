    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |

╭─────────────┈⊷
│「 _*ɪɴꜰᴏ ʙᴏᴛ*_ 」  
╰────────────┈⊷  
       
🐶͘͜  _${usedPrefix}owner | creador_
🐶͘͜  _${usedPrefix}repo | repositorio_
🐶͘͜  _${usedPrefix}estado_
🐶͘͜  _${usedPrefix}grupos | gruposjt_
🐶͘͜  _${usedPrefix}dash | dashboard_
🐶͘͜  _${usedPrefix}speedtest_
🐶͘͜  _${usedPrefix}instalarbot | infoinstalar_
🐶͘͜  bot/sub bot: ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Este es el Bot oficial'}

 ${readMore}
╭─────────────┈⊷
│ 「 _*ᴍᴇɴᴜꜱ*_ 」
╰────────────┈⊷            
🐶͘͜  _${usedPrefix}MenuPorn | porn_
🐶͘͜  _${usedPrefix}menuanimes | animes_
🐶͘͜  _${usedPrefix}menuaudios | audios_
🐶͘͜  _${usedPrefix}MenuCreador_
🐶͘͜  _${usedPrefix}MenuDescargas | Descargas_
🐶͘͜  _${usedPrefix}MenuRPG | RPG_

${readMore}
╭─────────────┈⊷
│ 「 _*ᴀᴄᴄɪᴏɴᴇꜱ*_ 」
╰────────────┈⊷
       
🐶͘͜  _${usedPrefix}kiss_
🐶͘͜  _${usedPrefix}slap_
🐶͘͜  _${usedPrefix}pat_
🐶͘͜  _${usedPrefix}dado_

╭─────────────┈⊷
│「 _*ɪᴀ/ʙᴏᴛ*_ 」
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
