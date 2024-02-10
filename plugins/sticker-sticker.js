import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let username = conn.getName(m.sender)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return conn.reply(m.chat, 'ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ᴠɪᴅᴇᴏ ᴅᴇʙᴇ ꜱᴇʀ ᴍᴇɴᴏʀ ᴀ *10 ꜱᴇɢᴜɴᴅᴏꜱ*', m, estilo)
      let img = await q.download?.()
      if (!img) return conn.reply(m.chat, `ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ɪᴍᴀɢᴇɴ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ᴇɴ ꜱᴛɪᴄᴋᴇʀ`, m, estilo)
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return conn.reply(m.chat, '[❗] ᴇʀʀᴏʀ [❗]\n\n ᴇʟ ᴇɴʟᴀᴄᴇ ɴᴏ ᴇꜱ ᴠᴀʟɪᴅᴏ, ᴛɪᴇɴᴇ Qᴜᴇ ꜱᴇʀ .ᴊᴘɢ  \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix}s https://telegra.ph/file/0dc687c61410765e98de2.jpg', m, estilo)
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) await conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: true, title: packname, body: `Simple whatsapp bot`, mediaType: 2, sourceUrl: group, thumbnail: catalogo}}}, { quoted: m })
    else return conn.reply(m.chat, '[❗] ᴇʀʀᴏʀ [❗] \n\n ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ɪᴍᴀɢᴇɴ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ᴇɴ ꜱᴛɪᴄᴋᴇʀ', m, estilo)
  }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
