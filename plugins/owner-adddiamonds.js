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
  let diamond = parseInt(txt)
  let limit = diamond
  let pjk = Math.ceil(diamond * impts)
  limit += pjk
  if (exp < 1) throw '⚠️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].limit += diamond

  await m.reply(`⊜ *✨ DIAMANTES AÑADIDOS*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${diamond}
┗━━━━━━━━━━━⬣`)
 conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${diamond} DIAMANTES ✨_*`, who, m.text)
}

handler.help = ['adddi *<@user>*']
handler.tags = ['owner']
handler.command = ['adddi'] 
handler.rowner = true

export default handler
