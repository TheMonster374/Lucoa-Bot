import db from '../lib/database.js'

const cooldown = 86400000 // 24 Horas
const expp = Math.floor(Math.random() * 500);

let handler = async (m) => {
  global.db.data.users[m.sender].exp 
   if (new Date - user.lastclaim < cooldown) return conn.reply(m.chat, `🧭 Espera *${((user.lastclaim + cooldown) - new Date()).toTimeString()}* para volver a Reclamar.`, m, adimagen)
   let txt = `Felicidades 🎉, reclamaste 500 🪙 Monedas*.`
   user.lastclaim = new Date * 1
   await conn.reply(m.chat, txt, m adimagen)
}

handler.help = ['claim']
handler.tags = ['rpg']
handler.command = ['daily', 'claim']
handler.register = true 
handler.cooldown = cooldown

export default handler
