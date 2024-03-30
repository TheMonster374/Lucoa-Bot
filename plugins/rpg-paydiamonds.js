import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '⚠️ *_Menciona al usuario con @user._*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -DIAMANTES- que quiere transferir._*'
  if (isNaN(txt)) throw ' 🔢 *sólo números.*'
  let diamond = parseInt(txt)
  let limit = diamond
  let imt = Math.ceil(diamond * impuesto)
  limit += imt
  if (limit < 1) throw '⚠️️ *Mínimo es  1.*'
  let users = global.db.data.users
  if (limit > users[m.sender].limit) throw '⚠️️ *_Diamantes insuficiente para transferir._*'
  users[m.sender].limit -= limit
  users[who].limit += diamond

  await m.reply(`⊜ *TRANSFERENCIA De DIAMANTES 💎*
┏━━━━━━━━━━━━━⬣
┃⋄  *${-diamond}* DIAMANTES 💎
┃⋄ Impuesto 2% : *${-imt}* DIAMANTES
┃⋄ Total gastado: *${-limit} DIAMANTES*
┗━━━━━━━━━━━━━⬣`)
  conn.fakeReply(m.chat, `⊜ *_Recibiste_*\n\n *_+${diamond} DIAMANTES 💎._*`, who, m.text)
}
handler.help = ['paydiamonds *@user <monto>*']
handler.tags = ['rpg']
handler.command = ['paydiamonds', 'paydi', 'transferdi', 'dardo'] 
handler.rowner = false

export default handler
