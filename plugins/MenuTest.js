const handler = async (m, {conn, text, args, usedPrefix, command}) => {
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  const caption = `*╭─────────────┈⊷
│ 「 _*ᴍᴇɴᴜꜱ*_ 」
╰────────────┈⊷  
          
🐶͘͜  _${usedPrefix}MenuPorn | porn_
🐕͘͜  _${usedPrefix}menuanimes | animes_
🐶͘͜  _${usedPrefix}menuaudios | audios_
🐕͘͜  _${usedPrefix}MenuJuegos | juegos_
🐶͘͜  _${usedPrefix}MenuCreador_
🐕͘͜  _${usedPrefix}MenuDescargas | Descargas_
🐶͘͜  _${usedPrefix}MenuRPG | RPG_

${readMore}
╭─────────────┈⊷
│ 「 _*ᴀᴄᴄɪᴏɴᴇꜱ*_ 」
╰────────────┈⊷
       
🐕͘͜  _${usedPrefix}besar @tag_
🐶͘͜  _${usedPrefix}pegar @tag_
🐕͘͜  _${usedPrefix}palmaditas @tag_
🐶͘͘͜͜  _${usedPrefix}alimentar @tag_
🐕  _${usedPrefix}patear @tag_
🐶͘͜  _${usedPrefix}abrazar @tag_
🐕͘͜  _${usedPrefix}dado @tag_

╭─────────────┈⊷
│「 _*ɪᴀ/ʙᴏᴛ*_ 」
╰────────────┈⊷

🐶͘͜  _${usedPrefix}bardimg_
🐕͘͜  _${usedPrefix}bard_
🐶͘͜  _${usedPrefix}iaimagen
🐶͘͜  _${usedPrefix}chatgpt *<texto>*_
🐕͘͜  _${usedPrefix}delchatgpt
🐶͘͜  _${usedPrefix}gptvoz *<texto>*_

╭─────────────┈⊷
│「 _*ᴍᴇɴꜱᴀᴊᴇꜱ ᴇɴ ᴇꜱᴘᴇʀᴀ*_ 」
╰────────────┈⊷

🐕͘͜   _${usedPrefix}reporte *<texto>*_
🐶͘͜  _${usedPrefix}fixmsgespera_

 ${readMore}
╭─────────────┈⊷
│「 _*ᴜɴᴇ ᴇʟ ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ*_ 」
╰────────────┈⊷

🐕͘͜  _${usedPrefix}join *<enlace / link / url>*_

 ${readMore}
╭─────────────┈⊷
│「 _*ꜱᴇʀʙᴏᴛ - ᴊᴀᴅɪʙᴏᴛ*_ 」
╰────────────┈⊷    

🐶͘͜  _${usedPrefix}serbot_
🐕͘͜  _${usedPrefix}serbot --code_
🐶͘͜  _${usedPrefix}token_
🐕͘͜  _${usedPrefix}bots_
(si quiere sacar el subbot vaya 
a dispositivos vinculados y cierre la sesion)

╭─────────────┈⊷
│「 _*ᴇɴᴀʙʟᴇ / ᴅɪꜱᴀʙʟᴇ*_ 」
╰────────────┈⊷     

🐶͘͜  _${usedPrefix}enable <opcion>_
🐕͘͜  _${usedPrefix}disable <opcion>_

 ${readMore}
╭─────────────┈⊷
│「 _*ʙᴜꜱᴄᴀᴅᴏʀᴇꜱ*_ 」
╰────────────┈⊷     
  
🐶͘͜  _${usedPrefix}githubsearch *<texto>*_
🐕͘͜  _${usedPrefix}pelisplus *<texto>*_
🐶͘͜  _${usedPrefix}modapk *<texto>*_
🐕͘͜  _${usedPrefix}stickersearch *<texto>*_
🐶͘͜  _${usedPrefix}stickersearch2 *<texto>*_
🐕͘͜  _${usedPrefix}xnxxsearch *<texto>*_
🐶͘͜  _${usedPrefix}animeinfo *<texto>*_
🐕͘͜  _${usedPrefix}google *<texto>*_
🐶͘͜  _${usedPrefix}letra *<texto>*_
🐕͘͜  _${usedPrefix}wikipedia *<texto>*_
🐶͘͜  _${usedPrefix}ytsearch *<texto>*_
🐕͘͜  _${usedPrefix}playstore *<texto>*_


╭─────────────┈⊷
│「 _*ɢʀᴜᴘᴏꜱ*_ 」
╰────────────┈⊷     

🐕͘͜  _${usedPrefix}del *<mensaje>*_
🐶͘͜  _${usedPrefix}banchat_
🐕͘͜  _${usedPrefix}unbanchat_
🐶͘͜  _${usedPrefix}add *<numero>*_
🐕͘͜  _${usedPrefix}kick *<@tag>*_
🐶͘͜  _${usedPrefix}kick2 *<@tag>*_
🐕͘͜  _${usedPrefix}listanum *<texto>*_
🐶͘͜  _${usedPrefix}kicknum *<texto>*_
🐕͘͜  _${usedPrefix}grupo *<abrir / cerrar>*_
🐶͘͜  _${usedPrefix}grouptime *<opcion> <tiempo>*_
🐕͘͜  _${usedPrefix}promote *<@tag>*_
🐶͘͜  _${usedPrefix}demote *<@tag>*_
🐕͘͜  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
🐶͘͜  _${usedPrefix}demote *<@tag>*_
🐕͘͜  _${usedPrefix}infogroup_
🐶͘͜  _${usedPrefix}resetlink_
🐕͘͜  _${usedPrefix}link_
🐶͘͜  _${usedPrefix}setname *<texto>*_
🐕͘͜  _${usedPrefix}setdesc *<texto>*_
🐶͘͜  _${usedPrefix}tagall *<texto>*_
🐕͘͜  _${usedPrefix}setwelcome *<texto>*_
🐶͘͜  _${usedPrefix}setbye *<texto>*_
🐕͘͜  _${usedPrefix}hidetag *<texto>*_
🐶͘͜  _${usedPrefix}hidetag *<audio>*_
🐕͘͜  _${usedPrefix}hidetag *<video>*_
🐶͘͜  _${usedPrefix}hidetag *<imagen>*_
🐕͘͜  _${usedPrefix}warn *<@tag>*_
🐶͘͜  _${usedPrefix}unwarn *<@tag>*_
🐕͘͜  _${usedPrefix}listwarn_
🐶͘͜  _${usedPrefix}fantasmas_
🐕͘͜  _${usedPrefix}setpp *<imagen>*_

 ${readMore}
╭─────────────┈⊷
│「 _*ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ*_ 」
╰────────────┈⊷
   
🐶͘͜  _${usedPrefix}toanime *<imagen>*_
🐕͘͜  _${usedPrefix}togifaud *<video>*_
🐶͘͜  _${usedPrefix}toimg *<sticker>*_
🐕͘͜  _${usedPrefix}tomp3 *<video>*_
🐶͘͜  _${usedPrefix}tomp3 *<nota de voz>*_
🐕͘͜  _${usedPrefix}toptt *<video / audio>*_
🐶͘͜  _${usedPrefix}tovideo *<sticker>*_
🐕͘͜  _${usedPrefix}tourl *<video / imagen / audio>*_
🐶͘͜  _${usedPrefix}tts *<idioma> <texto>*_
🐕͘͜  _${usedPrefix}tts *<efecto> <texto>*_


╭─────────────┈⊷
│「 _*ᴘᴇʀꜰɪʟ*_ 」 
╰────────────┈⊷      
      
🐶͘͜  _${usedPrefix}logos *<efecto> <texto>*_
🐕͘͜  _${usedPrefix}logochristmas *<texto>*_
🐶͘͜  _${usedPrefix}logocorazon *<texto>*_
🐕͘͜  _${usedPrefix}ytcomment *<texto>*_
🐶͘͜  _${usedPrefix}hornycard *<@tag>*_
🐕͘͜  _${usedPrefix}simpcard *<@tag>*_
🐶͘͜  _${usedPrefix}lolice *<@tag>*_
🐕͘͜  _${usedPrefix}itssostupid_
🐶͘͜  _${usedPrefix}pixelar_
🐕͘͜  _${usedPrefix}blur_


╭─────────────┈⊷
│「 _*ꜰʀᴀꜱᴇꜱ ʏ ᴛᴇxᴛᴏꜱ*_ 」
╰────────────┈⊷
    
🐶͘͜  _${usedPrefix}piropo_
🐕͘͜  _${usedPrefix}consejo_
🐶͘͜  _${usedPrefix}fraseromantica_
🐕͘͜  _${usedPrefix}historiaromantica_

${readMore}
╭─────────────┈⊷
│「 _*ʀᴀɴᴅᴏᴍ*_ 」
╰────────────┈⊷
  
🐶͘͜  _${usedPrefix}cat_
🐕͘͜  _${usedPrefix}dog_

╭─────────────┈⊷
│「 _*ᴇꜰᴇᴄᴛᴏꜱ ᴀᴜᴅɪᴏ*_ 」
╰────────────┈⊷
   
*RESPONDE A AUDIO O NOTA DE VOZ*
🐕͘͜  _${usedPrefix}bass_
🐶͘͜  _${usedPrefix}blown_
🐕͘͜  _${usedPrefix}deep_
🐶͘͜  _${usedPrefix}earrape_
🐕͘͜  _${usedPrefix}fast_
🐶͘͜  _${usedPrefix}fat_
🐕͘͜  _${usedPrefix}nightcore_
🐶͘͜  _${usedPrefix}reverse_
🐕͘͜  _${usedPrefix}robot_
🐶͘͜  _${usedPrefix}slow_
🐕͘͜  _${usedPrefix}smooth_
🐶͘͜  _${usedPrefix}tupai_

╭─────────────┈⊷
│「 _*Qʀ*_」
╰────────────┈⊷

🐶͘͜  _${usedPrefix}readqr *<imagen (QR)>*_
🐕͘͜  _${usedPrefix}qrcode *<texto>*_

╭─────────────┈⊷
│「 _*ꜱᴛɪᴄᴋᴇʀꜱ*_」
╰────────────┈⊷

🐶͘͜  _${usedPrefix}sticker *<responder a imagen o video>*_
🐕͘͜  _${usedPrefix}sticker2 *<responder a imagen o video>*_
🐶͘͜  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
🐕͘͜  _${usedPrefix}scircle *<imagen>*_
🐶͘͜  _${usedPrefix}sremovebg *<imagen>*_
🐕͘͜  _${usedPrefix}wm *<packname> <author>*_
🐶͘͜  _${usedPrefix}stickermarker *<efecto> <imagen>*_
🐕͘͜  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
🐕͘͜  _${usedPrefix}semoji *<tipo> <emoji>*_
🐶͘͜  _${usedPrefix}qc *<texto>*_
🐕͘͜  _${usedPrefix}attp *<texto>*_
🐶͘͜  _${usedPrefix}attp2 *<texto>*_
🐕͘͜  _${usedPrefix}attp3 *<texto>*_
🐶͘͜  _${usedPrefix}ttp *<texto>*_
🐕͘͜  _${usedPrefix}ttp2 *<texto>*_
🐶͘͜  _${usedPrefix}ttp3 *<texto>*_
🐕͘͜  _${usedPrefix}ttp4 *<texto>*_
🐶͘͜  _${usedPrefix}ttp5 *<texto>*_

 ${readMore}
╭─────────────┈⊷
│「 _*ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ*_ 」
╰────────────┈⊷

🐕͘͜  _${usedPrefix}inspect *<link whatsapp grupo>*_
🐶͘͜  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
🐕͘͜  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
🐶͘͜  _${usedPrefix}readviewonce *<imagen / video>*_
🐕͘͜  _${usedPrefix}clima *<país> <ciudad>*_
🐶͘͜  _${usedPrefix}encuesta *<texto1|texto2...>*_
🐕͘͜  _${usedPrefix}afk *<motivo>*_
🐶͘͜  _${usedPrefix}ocr *<responde a imagen>*_
🐕͘͜  _${usedPrefix}hd *<responde a imagen>*_
🐶͘͜  _${usedPrefix}acortar *<enlace / link / url>*_
🐕͘͜  _${usedPrefix}calc *<operacion math>*_
🐕͘͜  _${usedPrefix}whatmusic *<audio>*_
🐶͘͜  _${usedPrefix}readmore *<texto1| texto2>*_
🐕͘͜  _${usedPrefix}styletext *<texto>*_
🐶͜  _${usedPrefix}traducir *<texto>*_
🐕͘͜  _${usedPrefix}nowa *<numero>*_
🐕͘͜  _${usedPrefix}horario_
🐶͘͜  _${usedPrefix}dropmail_
`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['XD', 'PRUEBA'];
export default handler;
