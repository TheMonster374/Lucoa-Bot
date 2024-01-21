import db from '../lib/database.js'

const cooldown = 604800000 // 7 días 

let handler = async (m) => {
   let user = global.db.data.users[m.sender]
   if (new Date - user.lastsemanal < cooldown) return conn.reply(m.chat, `🧭 Espera *${((user.lastsemanal + cooldown) - new Date()).toTimeString()}* para volver a Reclamar.`, m, )
   let txt = `Felicidades 🎉, reclamaste *3000 XP*.`
   user.exp += 3000
   user.lastsemanal = new Date * 1
   await conn.reply(m.chat, txt, m, )
}

handler.help = ['semanal']
handler.tags = ['rpg']
handler.command = ['semanal', 'mes', '.weekly']
handler.cooldown = cooldown

export default handler
