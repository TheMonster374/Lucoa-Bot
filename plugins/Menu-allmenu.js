import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': ' `《ɪɴꜰᴏ》` ℹ️',
  'game': ' `《ᴊᴜᴇɢᴏꜱ》` 🎮',
  'rpg': ' `《ʀᴘɢ》` ⚔️',
  'nsfw': ' `《ɴꜱꜰᴡ》` 🔞',
  'jadibot': ' `《ꜱᴜʙʙᴏᴛꜱ》` 🤖',
  'react': ' `《ʀᴇᴀᴄᴄɪᴏɴᴇꜱ》` 🥸',
  'downloader': ' `《ᴅᴇꜱᴄᴀʀɢᴀꜱ》` 🔽',
  'stalkear' : ' `《ꜱᴛᴀʟᴋᴇᴀʀ》` 👤' ,
  'ia' : ' `《ɪᴀ》` 🤖' ,
  'efectos' : ' `《ᴇꜰᴇᴄᴛᴏꜱ ʏ ʟᴏɢᴏꜱ》` ✨' ,
  'on|off': ' `《ᴏɴ/ᴏꜰꜰ》` ☑️',
  'grupo' : ' `《ɢʀᴜᴘᴏꜱ》` 🐲' ,
  'rg': ' `《ʀᴇɢɪꜱᴛʀᴏ》` 🧾',
  'search': ' `《ʙᴜꜱᴄᴀᴅᴏʀ》`🔎',
  'img': ' `《ɪᴍᴀɢᴇɴᴇꜱ》` 🖼',
  'tools': ' `《ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ》` 🛠️',
  'fun': '`《ᴅɪᴠᴇʀꜱɪᴏɴ》` 🎉',
  'audio': ' `《ᴇꜰᴇᴄᴛᴏꜱ ᴅᴇ ᴀᴜᴅɪᴏ》` 🎙️', 
  'sticker': ' `《ꜱᴛɪᴄᴋᴇʀꜱ》` 💚',
  //'owner': ' `《ᴄʀᴇᴀᴅᴏʀᴀ》` 🧁',
  'owner': ' `《ᴄʀᴇᴀᴅᴏʀ》` 🧁',
}
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))



let uptime = `${clockString(process.uptime())}`

const defaultMenu = {
  before: `
> ℍ𝕠𝕝𝕒 *%taguser*, 𝕊𝕠𝕪 𝕃𝕦𝕔𝕠𝕒
  
┏━☋ ꕥ *👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢* ꕥ
┃➥🐲 *𝘕𝘰𝘮𝘣𝘳𝘦* : %name
┃➥💎 *𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴* : %limit
┃➥🏆 *𝘕𝘪𝘷𝘦𝘭* : %level
┃➥🧿 *𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢* : %totalexp
┗━━━━━━━━━━━━━☊
%readmore
┏━☋ ꕥ *🐲 𝗟𝗨𝗖𝗢𝗔-𝗕𝗢𝗧* ꕥ
┃➥🧁 *𝘊𝘳𝘦𝘢𝘥𝘰𝘳*: ${ow2}
┃➥👤 *𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴* : %totalreg
┃➥🕘 *𝘈𝘤𝘵𝘪𝘷𝘢* : ${uptime}
┃➥✨ *𝘛𝘰𝘵𝘢𝘭 𝘨𝘳𝘶𝘱𝘰𝘴* : ${groupsIn.length}
┗━━━━━━━━━━━━━☊
%readmore
\t\t\t
`.trimStart(),
  header: '❥━☋ %category \n╭─────────────···',
  body: '┃➽ *_%cmd_*\n',
  footer: '╰─────────────···\n❥━━━━━━━━━━━━━☊',
  after: '> 𝙇𝙐𝘾𝙊𝘼\n> 𝘽𝙮 𝙈𝙤𝙣𝙨𝙩𝙚𝙧 \n © 2024 Yunnis | All rights reserved',
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
    
     let pp = 'https://telegra.ph/file/345ddd00b2854bdd4ba63.mp4' 
     let pp2 = 'https://telegra.ph/file/345ddd00b2854bdd4ba63.mp4' 
    conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: m })

  } catch (e) {
    conn.reply(m.chat, '[❌] ERROR \n\n El menu tiene un error', m)
    throw e
  }
}

//handler.customPrefix = /comandos|Comandos/i
handler.help = ['allmenu'];
handler.command = ['allmenu', 'AllMenu'];
//handler.command = new RegExp
export default handler



const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
