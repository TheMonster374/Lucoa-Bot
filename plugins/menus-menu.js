import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
         *_🐶𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭♔わ🐶_*
    
    
𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕

           「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  

ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
_${usedPrefix}ComandosNuevos_
_${usedPrefix}Nuevo_

╭────────────────
│𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
╰────────────────         
╭────────────────     
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}owner/creador_
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}repo/repositorio_
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}estado_
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}grupos/gruposjt_
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}speedtest
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  _Bot_ (uso sin prefijo)
│ ❥꫶ꪆꦿꦼ͜͡🐶͘͜  *bot/sub bot:*${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
╰────────────────  
 
${readMore}
            「 𝐌𝐄𝐍𝐔𝐒 」
            
╭────────────────            
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}MenuPorn/porn_
│
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}menuanimes/animes_
│
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}menuaudios/audios_
│
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}MenuCreador_
│
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}MenuDescargas/Descargas_
│
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}MenuRPG/RPG_
╰────────────────
 
${readMore}

       「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
       
╭────────────────        
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kiss_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}slap_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pat_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dado_
╰────────────────
 
  「𝐇𝐀𝐁𝐋𝐀𝐑 𝐂𝐎𝐍 𝐄𝐋 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」

╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}Jotchua_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}aicharacter_
╰────────────────

     「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」

╭──────────────── 
│⟼ Mensajes en espera
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fixmsgespera_
╰────────────────

${readMore}

    「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」

╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}join *<enlace / link / url>*_
╰────────────────
${readMore}

    「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
    
╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}serbot --code_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}serbot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}deletebot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}token
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stop_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}bots_
╰────────────────

   「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」
   
╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable restrict_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable restrict_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable autoread_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable autoread_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable antispam_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable antispam_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable anticall_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable anticall_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable modoia_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable modoia_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable audios_bot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable audios_bot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}enable antiprivado_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}disable antiprivado_
╰────────────────
${readMore}

       「 𝐉𝐔𝐄𝐆𝐎𝐒 」

╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}ppt *<papel / tijera /piedra>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}prostituto *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}prostituta *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}gay2 *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}lesbiana *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pajero *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pajera *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}puto *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}puta *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}manco *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}manca *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}rata *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}love *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}doxear *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pregunta *<texto>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}suitpvp *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}slot *<apuesta>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}ttt *<nombre sala>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}delttt_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}acertijo_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}simi *<texto>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}top *<texto>*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}topgays_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}topotakus_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}formarpareja_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}verdad_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}reto_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}cancion_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pista_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}wordfind_
╰────────────────
${readMore}

    「 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *welcome*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *modohorny*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *modohorny*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antilink*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antilink*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antilink2*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antilink2*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *detect*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *detect*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *audios*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *audios*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *autosticker*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *autosticker*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antiviewonce*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antiviewonce*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antitoxic*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antitoxic*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antitraba*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antitraba*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antiarabes*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antiarabes*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *modoadmin*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *modoadmin*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antidelete*_
│❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antidelete*_
╰────────────────
${readMore}

   「 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」

╭────────────────    
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}reporte *<texto>*_
╰────────────────
${readMore}

     「 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 」
     
╭────────────────      
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}githubsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pelisplus *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}modapk *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickersearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickersearch2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}xnxxsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}animeinfo *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}google *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}letra *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wikipedia *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ytsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}playstore *<texto>*_
╰────────────────

     「 𝐆𝐑𝐔𝐏𝐎𝐒 」
     
╭────────────────      
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}add *<numero>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kick *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kick2 *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}listanum *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kicknum *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}grupo *<abrir / cerrar>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}grouptime *<opcion> <tiempo>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}promote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}demote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}demote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}infogroup_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}resetlink_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}link_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setname *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setdesc *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tagall *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setwelcome *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setbye *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}warn *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}unwarn *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}listwarn_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fantasmas_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}destraba_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setpp *<imagen>*_
╰────────────────
${readMore}

    「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toanime *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}togifaud *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toimg *<sticker>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tomp3 *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tomp3 *<nota de voz>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toptt *<video / audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tovideo *<sticker>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tourl *<video / imagen / audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tts *<idioma> <texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tts *<efecto> <texto>*_
╰────────────────
${readMore}

      「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 」 
      
╭────────────────       
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logos *<efecto> <texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logochristmas *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logocorazon *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ytcomment *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hornycard *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}simpcard *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}lolice *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}itssostupid_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pixelar_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}blur_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toanime_
╰────────────────
${readMore}

     「 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}piropo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}consejo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fraseromantica_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}historiaromantica_
╰────────────────
${readMore}

${readMore}

     「 𝐑𝐀𝐍𝐃𝐎𝐌 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kpop *<blackpink / exo / bts>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cristianoronaldo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}messi_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cat_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dog_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}meme_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}itzy_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}blackpink_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}navidad_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpmontaña_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pubg_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpgaming_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpaesthetic_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpaesthetic2_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wprandom_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wallhp_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpvehiculo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wpmoto_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}coffee_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pentol_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}caricatura_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ciberespacio_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}technology_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}doraemon_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hacker_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}planeta_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}randomprofile_
╰────────────────
${readMore}

${readMore}

     「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 」

╭────────────────     
│*RESPONDE A AUDIO O NOTA DE VOZ*
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}bass_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}blown_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}deep_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}earrape_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fast_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fat_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nightcore_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}reverse_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}robot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}slow_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}smooth_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tupai_
╰────────────────
${readMore}

  「 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 」

╭────────────────   
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}start_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}next_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}leave_
╰────────────────
${readMore}

${readMore}

      「 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 」

╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}inspect *<link wa_gc>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}chatgpt *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}delchatgpt
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}gptvoz *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dall-e *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readviewonce *<imagen / video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}clima *<país> <ciudad>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}encuesta *<texto1|texto2...>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}afk *<motivo>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ocr *<responde a imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hd *<responde a imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}acortar *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}calc *<operacion math>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}del *<mensaje>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}whatmusic *<audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readqr *<imagen (QR)>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}qrcode *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readmore *<texto1| texto2>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}styletext *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}traducir *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nowa *<numero>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}covid *<pais>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}horario_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dropmail_
╰────────────────

${readMore}

            「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 」

╭────────────────             
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker2 *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker2 *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}s *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}s *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}scircle *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sremovebg *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}semoji *<tipo> <emoji>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}qc *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp3 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp3 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp4 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp5 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wm *<packname> <author>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickermarker *<efecto> <imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰────────────────
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
