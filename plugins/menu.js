importar  {  promesas  }  desde  'fs'
importar  {  unirse  }  desde  'ruta'
importar  buscar  desde  'node-fetch'
importar  {  xpRange  }  desde  '../lib/levelling.js'

dejar  etiquetas  =  {
  'main' : '📄 𝑰𝑵𝑭𝑶 📄━' ,
  'game' : '🎮 ᴊᴜᴇɢᴏꜱ 🎮' ,
  'serbot' : '🤖 ꜱᴜʙ ʙᴏᴛꜱ 🤖' ,
  'rpg' : '💸ᴇᴄᴏɴᴏᴍɪᴀ💸' ,
  'rg' : '📊ʀᴇɢɪꜱᴛʀᴏ📊' ,
  'downloader' : '📥ᴅᴇꜱᴄᴀʀɢᴀꜱ📤' ,
  'marcador' : 'LOGO - FABRICANTE' ,
  'stalkear' : '👤ꜱᴛᴀʟᴋᴇʀ👤' ,
  'ia' : '🤖 ɪᴀ 🤖━━━━' ,
  'nable' : 'ᴀᴄᴛɪᴠᴀᴅᴏʀᴇꜱ📋' ,
  'grupos' : '🌱 ɢʀᴜᴘᴏꜱ 🌱' ,
  'search' : '🔎ʙᴜꜱᴄᴀᴅᴏʀ🔍' ,
  'img' : '🖼ɪᴍᴀɢᴇɴᴇꜱ🖼' ,
  'tools' : 'ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ🔧' ,
  'fun' : '🎉ᴅɪᴠᴇʀꜱɪᴏɴ🎉' ,
  'audio' : 'ᴇꜰᴇᴄᴛᴏꜱ ᴅᴇ ᴀᴜᴅɪᴏꜱ' , 
  'sticker' : '🧸ꜱᴛɪᴄᴋᴇʀꜱ🧸' ,
  'nsfw' : '🔞 ɴꜱꜰᴡ 🔞' ,
  'owner' : '🐕 ᴄʀᴇᴀᴅᴏʀ 🐕' ,
}
const defaultMenu = {
  before: `
──────────────────────
Hola *%taguser*,
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
┆📅 *𝑫𝒊𝒂*: %semana
┆📅 *𝑭𝒆𝒄𝒉𝒂*: %fecha
┆🐢 *𝑪𝒓𝒆𝒂𝒅𝒐𝒓*: +54 9 11 4477-5561
┆👤 *𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔* : %totalreg
┆📑 𝑨𝑽𝑰𝑺𝑶: 𝑺𝒆 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒔𝒊
┆𝒍𝒆 𝒉𝒂𝒃𝒍𝒂𝒏 𝒅𝒆 𝒋𝒐𝒕𝒄𝒉𝒖𝒂 𝒂 𝒐𝒕𝒓𝒂𝒔
┆𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒆𝒍
┆𝒃𝒐𝒕 𝒔𝒆𝒂 𝒎𝒂𝒔 𝒄𝒐𝒏𝒐𝒄𝒊𝒅𝒐 🐶
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
✗━━━━━━━━━━━━━━━━━━━━✗
┃🌼 *𝑵𝒐𝒎𝒃𝒓𝒆* : %nombre
┃💎 *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* : %límite
┃🔰 *𝑵𝒊𝒗𝒆𝒍* : %nivel
┃✨ *𝑿𝑷* : %exp.total
✗━━━━━━━━━━━━━━━━━━━━✗  
%leer más
──────────────────────
\t\t\t*𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺 *
` . recortarInicio ( ) ,
  encabezado : '╭━━━% categoría━━━━━━╮' ,
  cuerpo : '┃ *%cmd*\n' ,
  pie de página : '╰━━━━━━━━━━━━━━━━━━━╯ ' ,
  después de : '\n*Jotchua - Bot - Mini*' ,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
 try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isstar/g, menu.star ? '˄' : '')
                .replace(/%isPremium/g, menu.premium ? '˄' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
     let pp = 'https://telegra.ph/file/8adf82315f2b226833c27.mp4'
     let pp2 = 'https://telegra.ph/file/8adf82315f2b226833c27.mp4'
conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: m })
   
  }  atrapar  ( e )  {
    conexión . responder ( m . chat ,  '❎ Lo sentimos, el menú tiene un error.' ,  m )
    tirar  e
  }
}
manipulador . comando  =  [ 'menú' ,  'ayuda' ,  'menú' ] 
exportar  controlador predeterminado 
const  más  =  Cadena . deCharCode ( 8206 )
const  leerMás  =  más . repetir ( 4001 )
función  cadena de reloj ( ms )  {
  sea  h  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  3600000 )
  sea  m  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  60000 )  %  60
  sea  s  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  1000 )  %  60
  devolver  [ h ,  m ,  s ] . mapa ( v  =>  v . toString ( ) . padStart ( 2 ,  0 ) ) . unirse ( ':' )
  }
