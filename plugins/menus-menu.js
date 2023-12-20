import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen3;
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
         *_⛄𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭-𝐌𝐃♔わ⛄_*
    
    
𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕

           「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  

╭────────────────
│𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
│*RAM* : ${format(totalmem() - freemem())} / ${format(totalmem())}
╰────────────────         
     
 ⟼ _${usedPrefix}owner_
 ⟼ _${usedPrefix}repo_
 ⟼ _${usedPrefix}infobot_
 ⟼ _${usedPrefix}estado_
 ⟼ _${usedPrefix}grupos_
 ⟼ _${usedPrefix}speedtest
 ⟼ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
 ⟼ *𝘣𝘰𝘵/𝘴𝘶𝘣 𝘣𝘰𝘵:*${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
 
${readMore}
            「 𝐌𝐄𝐍𝐔𝐒 」
           
⟼ _${usedPrefix}MenuPorn/porn_

⟼ _${usedPrefix}menuanimes/animes_

⟼ _${usedPrefix}menuaudios/audios_

⟼ _${usedPrefix}Creador/MenuCreador_

⟼ _${usedPrefix}MenuDescargas/Descargas_

⟼ _${usedPrefix}MenuRPG/RPG_

${readMore}

       「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
       
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}kiss_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}slap_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pat_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}dado_
       
      「𝐇𝐀𝐁𝐋𝐀𝐑 𝐂𝐎𝐍 𝐄𝐋 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」

❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}Jotchua_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}aicharacter_

     「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
     
⟼ Mensajes en espera
⟼  _${usedPrefix}fixmsgespera_


${readMore}

${readMore}
    「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」
 
⟼ _${usedPrefix}join *<enlace / link / url>*_

${readMore}

    「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」

❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}serbot --code_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}serbot_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}deletebot_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}token
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}stop_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}bots_

   「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」

❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable restrict_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable restrict_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable autoread_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable autoread_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable antispam_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable antispam_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable anticall_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable anticall_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable modoia_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable modoia_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable audios_bot_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable audios_bot_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable antiprivado_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable antiprivado_

${readMore}

       「 𝐉𝐔𝐄𝐆𝐎𝐒 」
       
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}ppt *<papel / tijera /piedra>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}prostituto *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}prostituta *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}gay2 *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}lesbiana *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pajero *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pajera *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}puto *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}puta *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}manco *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}manca *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}rata *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}love *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}doxear *<nombre / @tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pregunta *<texto>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}suitpvp *<@tag>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}slot *<apuesta>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}ttt *<nombre sala>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}delttt_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}acertijo_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}simi *<texto>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}top *<texto>*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}topgays_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}topotakus_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}formarpareja_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}verdad_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}reto_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}cancion_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}pista_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}wordfind_

${readMore}

    「 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 」
    
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *welcome*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *modohorny*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *modohorny*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antilink*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antilink*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antilink2*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antilink2*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *detect*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *detect*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *audios*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *audios*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *autosticker*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *autosticker*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antiviewonce*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antiviewonce*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antitoxic*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antitoxic*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antitraba*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antitraba*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antiarabes*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antiarabes*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *modoadmin*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *modoadmin*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}enable *antidelete*_
❥꫶ꪆꦿꦼ͜͡⛄͘͜  _${usedPrefix}disable *antidelete*_

${readMore}

   「 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
   
_${usedPrefix}reporte *<texto>*_

${readMore}

     「 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 」
     
_${usedPrefix}githubsearch *<texto>*_
_${usedPrefix}pelisplus *<texto>*_
_${usedPrefix}modapk *<texto>*_
_${usedPrefix}stickersearch *<texto>*_
_${usedPrefix}stickersearch2 *<texto>*_
_${usedPrefix}xnxxsearch *<texto>*_
_${usedPrefix}animeinfo *<texto>*_
_${usedPrefix}google *<texto>*_
_${usedPrefix}letra *<texto>*_
_${usedPrefix}wikipedia *<texto>*_
_${usedPrefix}ytsearch *<texto>*_
_${usedPrefix}playstore *<texto>*_


     「 𝐆𝐑𝐔𝐏𝐎𝐒 」
     
 _${usedPrefix}add *<numero>*_
 _${usedPrefix}kick *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}kick2 *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}listanum *<texto>*_
│⛁┣ ⛄  _${usedPrefix}kicknum *<texto>*_
│⛁┣ ⛄  _${usedPrefix}grupo *<abrir / cerrar>*_
│⛁┣ ⛄  _${usedPrefix}grouptime *<opcion> <tiempo>*_
│⛁┣ ⛄  _${usedPrefix}promote *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}demote *<@tag>*_
│⛁┣ ⛄  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│⛁┣ ⛄ _${usedPrefix}demote *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}infogroup_
│⛁┣ ⛄  _${usedPrefix}resetlink_
│⛁┣ ⛄  _${usedPrefix}link_
│⛁┣ ⛄  _${usedPrefix}setname *<texto>*_
│⛁┣ ⛄  _${usedPrefix}setdesc *<texto>*_
│⛁┣ ⛄  _${usedPrefix}tagall *<texto>*_
│⛁┣ ⛄  _${usedPrefix}setwelcome *<texto>*_
│⛁┣ ⛄  _${usedPrefix}setbye *<texto>*_
│⛁┣ ⛄  _${usedPrefix}hidetag *<texto>*_
│⛁┣ ⛄  _${usedPrefix}hidetag *<audio>*_
│⛁┣ ⛄  _${usedPrefix}hidetag *<video>*_
│⛁┣ ⛄  _${usedPrefix}hidetag *<imagen>*_
│⛁┣ ⛄  _${usedPrefix}warn *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}unwarn *<@tag>*_
│⛁┣ ⛄  _${usedPrefix}listwarn_
│⛁┣ ⛄ _${usedPrefix}fantasmas_
│⛁┣ ⛄  _${usedPrefix}destraba_
│⛁┣ ⛄  _${usedPrefix}setpp *<imagen>*_

${readMore}

    「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 」
    
│⛂┣ ⛄  _${usedPrefix}toanime *<imagen>*_
│⛂┣ ⛄  _${usedPrefix}togifaud *<video>*_
│⛂┣ ⛄  _${usedPrefix}toimg *<sticker>*_
│⛂┣ ⛄  _${usedPrefix}tomp3 *<video>*_
│⛂┣ ⛄  _${usedPrefix}tomp3 *<nota de voz>*_
│⛂┣ ⛄  _${usedPrefix}toptt *<video / audio>*_
│⛂┣ ⛄  _${usedPrefix}tovideo *<sticker>*_
│⛂┣ ⛄  _${usedPrefix}tourl *<video / imagen / audio>*_
│⛂┣ ⛄  _${usedPrefix}tts *<idioma> <texto>*_
│⛂┣ ⛄  _${usedPrefix}tts *<efecto> <texto>*_

${readMore}

      「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 」 
      
│⛃┣ ⛄  _${usedPrefix}logos *<efecto> <texto>*_
│⛃┣ ⛄  _${usedPrefix}logochristmas *<texto>*_
│⛃┣ ⛄  _${usedPrefix}logocorazon *<texto>*_
│⛃┣ ⛄  _${usedPrefix}ytcomment *<texto>*_
│⛃┣ ⛄  _${usedPrefix}hornycard *<@tag>*_
│⛃┣ ⛄  _${usedPrefix}simpcard *<@tag>*_
│⛃┣ ⛄  _${usedPrefix}lolice *<@tag>*_
│⛃┣ ⛄  _${usedPrefix}itssostupid_
│⛃┣ ⛄  _${usedPrefix}pixelar_
│⛃┣ ⛄  _${usedPrefix}blur_
│⛃┣ ⛄  _${usedPrefix}toanime_

${readMore}

     「 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 」
     
│★┣ ⛄  _${usedPrefix}piropo_
│★┣ ⛄  _${usedPrefix}consejo_
│★┣ ⛄  _${usedPrefix}fraseromantica_
│★┣ ⛄  _${usedPrefix}historiaromantica_

${readMore}

${readMore}

     「 𝐑𝐀𝐍𝐃𝐎𝐌 」
     
│✦┣ ⛄  _${usedPrefix}kpop *<blackpink / exo / bts>*_
│✦┣ ⛄  _${usedPrefix}cristianoronaldo_
│✦┣ ⛄  _${usedPrefix}messi_
│✦┣ ⛄  _${usedPrefix}cat_
│✦┣ ⛄  _${usedPrefix}dog_
│✦┣ ⛄  _${usedPrefix}meme_
│✦┣ ⛄  _${usedPrefix}itzy_
│✦┣ ⛄  _${usedPrefix}blackpink_
│✦┣ ⛄_${usedPrefix}navidad_
│✦┣ ⛄  _${usedPrefix}wpmontaña_
│✦┣ ⛄  _${usedPrefix}pubg_
│✦┣ ⛄  _${usedPrefix}wpgaming_
│✦┣ ⛄  _${usedPrefix}wpaesthetic_
│✦┣ ⛄  _${usedPrefix}wpaesthetic2_
│✦┣ ⛄ _${usedPrefix}wprandom_
│✦┣ ⛄  _${usedPrefix}wallhp_
│✦┣ ⛄  _${usedPrefix}wpvehiculo_
│✦┣ ⛄  _${usedPrefix}wpmoto_
│✦┣ ⛄  _${usedPrefix}coffee_
│✦┣ ⛄  _${usedPrefix}pentol_
│✦┣ ⛄  _${usedPrefix}caricatura_
│✦┣ ⛄  _${usedPrefix}ciberespacio_
│✦┣ ⛄  _${usedPrefix}technology_
│✦┣ ⛄  _${usedPrefix}doraemon_
│✦┣ ⛄  _${usedPrefix}hacker_
│✦┣ ⛄  _${usedPrefix}planeta_
│✦┣ ⛄  _${usedPrefix}randomprofile_

${readMore}

${readMore}

     「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 」
     
│✤┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
│✤┣ ⛄  _${usedPrefix}bass_
│✤┣ ⛄  _${usedPrefix}blown_
│✤┣ ⛄  _${usedPrefix}deep_
│✤┣ ⛄  _${usedPrefix}earrape_
│✤┣ ⛄  _${usedPrefix}fast_
│✤┣ ⛄  _${usedPrefix}fat_
│✤┣ ⛄  _${usedPrefix}nightcore_
│✤┣ ⛄  _${usedPrefix}reverse_
│✤┣ ⛄  _${usedPrefix}robot_
│✤┣ ⛄  _${usedPrefix}slow_
│✤┣ ⛄  _${usedPrefix}smooth_
│✤┣ ⛄  _${usedPrefix}tupai_

${readMore}

  「 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 」
  
_${usedPrefix}start_
_${usedPrefix}next_
_${usedPrefix}leave_

${readMore}

${readMore}

      「 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 」

│✲┣ ⛄  _${usedPrefix}inspect *<link wa_gc>*_
│✲┣ ⛄  _${usedPrefix}chatgpt *<texto>*_
│✲┣ ⛄  _${usedPrefix}delchatgpt
│✲┣ ⛄  _${usedPrefix}gptvoz *<texto>*_
│✲┣ ⛄  _${usedPrefix}dall-e *<texto>*_
│✲┣ ⛄  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│✲┣ ⛄  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│✲┣ ⛄  _${usedPrefix}readviewonce *<imagen / video>*_
│✲┣ ⛄  _${usedPrefix}clima *<país> <ciudad>*_
│✲┣ ⛄  _${usedPrefix}encuesta *<texto1|texto2...>*_
│✲┣ ⛄  _${usedPrefix}afk *<motivo>*_
│✲┣ ⛄  _${usedPrefix}ocr *<responde a imagen>*_
│✲┣ ⛄  _${usedPrefix}hd *<responde a imagen>*_
│✲┣ ⛄  _${usedPrefix}acortar *<enlace / link / url>*_
│✲┣ ⛄  _${usedPrefix}calc *<operacion math>*_
│✲┣ ⛄  _${usedPrefix}del *<mensaje>*_
│✲┣ ⛄  _${usedPrefix}whatmusic *<audio>*_
│✲┣ ⛄  _${usedPrefix}readqr *<imagen (QR)>*_
│✲┣ ⛄  _${usedPrefix}qrcode *<texto>*_
│✲┣ ⛄  _${usedPrefix}readmore *<texto1| texto2>*_
│✲┣ ⛄  _${usedPrefix}styletext *<texto>*_
│✲┣ ⛄  _${usedPrefix}traducir *<texto>*_
│✲┣ ⛄ _${usedPrefix}nowa *<numero>*_
│✲┣ ⛄  _${usedPrefix}covid *<pais>*_
│✲┣ ⛄  _${usedPrefix}horario_
│✲┣ ⛄  _${usedPrefix}dropmail_


${readMore}

            「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 」
│⚝┣ ⛄  _${usedPrefix}sticker *<responder a imagen o video>*_
│⚝┣ ⛄  _${usedPrefix}sticker *<enlace / link / url>*_
│⚝┣ ⛄  _${usedPrefix}sticker2 *<responder a imagen o video>*_
│⚝┣ ⛄  _${usedPrefix}sticker2 *<enlace / link / url>*_
│⚝┣ ⛄  _${usedPrefix}s *<responder a imagen o video>*_
│⚝┣ ⛄ _${usedPrefix}s *<enlace / link / url>*_
│⚝┣ ⛄  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│⚝┣ ⛄  _${usedPrefix}scircle *<imagen>*_
│⚝┣ ⛄  _${usedPrefix}sremovebg *<imagen>*_
│⚝┣ ⛄  _${usedPrefix}semoji *<tipo> <emoji>*_
│⚝┣ ⛄  _${usedPrefix}qc *<texto>*_
│⚝┣ ⛄  _${usedPrefix}attp *<texto>*_
│⚝┣ ⛄  _${usedPrefix}attp2 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}attp3 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}ttp *<texto>*_
│⚝┣ ⛄  _${usedPrefix}ttp2 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}ttp3 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}ttp4 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}ttp5 *<texto>*_
│⚝┣ ⛄  _${usedPrefix}pat *<@tag>*_
│⚝┣ ⛄  _${usedPrefix}slap *<@tag>*_
│⚝┣ ⛄  _${usedPrefix}kiss *<@tag>*_
│⚝┣ ⛄  _${usedPrefix}dado_
│⚝┣ ⛄  _${usedPrefix}wm *<packname> <author>*_
│⚝┣ ⛄  _${usedPrefix}stickermarker *<efecto> <imagen>*_
│⚝┣ ⛄  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
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
    conn.reply(m.chat, '*Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
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
