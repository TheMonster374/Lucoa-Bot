import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀 𝗕𝗕☀️!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕

╭─────────────┈
│╭─────────────┈⊷
││「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  
│╰────────────┈⊷  
│           
│𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭:  
│https://github.com/AleXD0009/Jotchua-Bot
│
│ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
│ _ComandosNuevos_
│ _Nuevo_
│
│╭────────────────
││𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
││𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |
│╰────────────────         
│╭────────────────     
││🐶͘͜  _owner | creador_
││🐶͘͜  _repo | repositorio_
││🐶͘͜  _estado_
││🐶͘͜  _grupos | gruposjt_
││🐶͘͜  _dash | dashboard_
││🐶͘͜  _speedtest_
││🐶͘͜  _instalarbot | infoinstalar_
││🐶͘͜  *bot/sub bot:*${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
│╰────────────────  
│ 
│╭─────────────┈⊷
││ 「 𝐌𝐄𝐍𝐔𝐒 」
│╰────────────┈⊷            
│╭────────────────            
││🐶͘͜  _MenuPorn | porn_
││
││🐶͘͜  _menuanimes | animes_
││
││🐶͘͜  _menuaudios | audios_
││
││🐶͘͜  _MenuCreador_
││
││🐶͘͜  _MenuDescargas | Descargas_
││
││🐶͘͜  _MenuRPG | RPG_
│╰────────────────
│ 
│ 
│╭─────────────┈⊷
││ 「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
│╰────────────┈⊷
│╭────────────────        
││🐶͘͜  _kiss_
││🐶͘͜  _slap_
││🐶͘͜  _pat_
││🐶͘͜  _dado_
│╰────────────────
│
│╭─────────────┈⊷
││「𝐈𝐀 / 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _bot_
││🐶͘͜  _$iaimagen
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││⟼ Mensajes en espera
││🐶͘͜  _fixmsgespera_
│╰────────────────
│
│
│╭─────────────┈⊷
││「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _join *<enlace / link / url>*_
│╰────────────────
│
│
│╭─────────────┈⊷
││「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
│╰────────────┈⊷    
│╭──────────────── 
││🐶͘͜  _serbot_
││🐶͘͜  _serbot --code_
││🐶͘͜  _token_
││🐶͘͜  _bots_
││(si quiere sacar el subbot vaya 
││a dispositivos vinculados y cierre la sesion)
│╰────────────────
│
│   「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」
│   
│╭──────────────── 
││🐶͘͜  _enable restrict_
││🐶͘͜  _disable restrict_
││🐶͘͜  _enable autoread_
││🐶͘͜  _disable autoread_
││🐶͘͜  _enable antispam_
││🐶͘͜  _disable antispam_
││🐶͘͜  _enable anticall_
││🐶͘͜  _disable anticall_
││🐶͘͜  _enable modoia_
││🐶͘͜  _disable modoia_
││🐶͘͜  _enable audios_bot_
││🐶͘͜  _disable audios_bot_
││🐶͘͜  _enable antiprivado_
││🐶͘͜  _disable antiprivado_
│╰────────────────
│
│ 
│
│       「 𝐉𝐔𝐄𝐆𝐎𝐒 」
│
│╭──────────────── 
││🐶͘͜  _mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
││🐶͘͜  _fake *<texto1> <@tag> <texto2>*_
││🐶͘͜  _ppt *<papel / tijera /piedra>*_
││🐶͘͜  _prostituto *<nombre / @tag>*_
││🐶͘͜  _prostituta *<nombre / @tag>*_
││🐶͘͜  _gay2 *<nombre / @tag>*_
││🐶͘͜  _lesbiana *<nombre / @tag>*_
│🐶͘͜  _pajero *<nombre / @tag>*_
│🐶͘͜  _pajera *<nombre / @tag>*_
│🐶͘͜  _puto *<nombre / @tag>*_
│🐶͘͜  _puta *<nombre / @tag>*_
│🐶͘͜  _manco *<nombre / @tag>*_
│🐶͘͜  _manca *<nombre / @tag>*_
│🐶͘͜  _rata *<nombre / @tag>*_
│🐶͘͜  _love *<nombre / @tag>*_
│🐶͘͜  _doxear *<nombre / @tag>*_
│🐶͘͜  _pregunta *<texto>*_
│🐶͘͜  _suitpvp *<@tag>*_
│🐶͘͜  _slot *<apuesta>*_
│🐶͘͜  _ttt *<nombre sala>*_
│🐶͘͜  _delttt_
│🐶͘͜  _acertijo_
│🐶͘͜  _sorteo (nombre de lo que va a sortear)_
│🐶͘͜  _top *<texto>*_
│🐶͘͜  _topgays_
│🐶͘͜  _topparejas_
│🐶͘͜  _amistad_
│🐶͘͜  _trivia_
│🐶͘͜  _topotakus_
│🐶͘͜  _formarpareja_
│🐶͘͜  _verdad_
│🐶͘͜  _reto_
│🐶͘͜  _cancion_
│🐶͘͜  _pista_
│🐶͘͜  _advpe_
│🐶͘͜  _palabra_
╰────────────────
`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆ 𝗟𝗢𝗕𝗢 - 𝗕𝗢𝗧 - 𝗠𝗗 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
