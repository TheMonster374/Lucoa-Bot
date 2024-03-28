import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '⚠️ *_Taguea al usuario_*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -DIAMANTES- que quiere añadir_*'
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*'
  let limit = parseInt(txt)
  let diamonds = limit
  let pjk = Math.ceil(limit * impts)
  diamonds += pjk
  if (diamonds < 1) throw '⚠️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].diamonds += limit

  await m.reply(`⊜ *💎 DIAMANTES AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${limit}
┗━━━━━━━━━━━⬣`)
 conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${limit} DIAMANTES 💎_*`, who, m.text)
}

handler.help = ['adddiamonds *<@user>*']
handler.tags = ['owner']
handler.command = ['adddiamonds'] 
handler.rowner = true

export default handler

