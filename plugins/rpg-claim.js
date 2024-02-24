import db from '../lib/database.js'

const cooldown = 86400000 // 24 Horas

let handler = async (m) => {
   let user = global.db.data.users[m.sender]
   if (new Date - user.lastclaim < cooldown) return conn.reply(m.chat, `🧭 𝑬𝒔𝒑𝒆𝒓𝒂 *${((user.lastclaim + cooldown) - new Date()).toTimeString()}* 𝒑𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝑹𝒆𝒄𝒍𝒂𝒎𝒂𝒓.`, m adReply)
   let txt = `𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 🎉, 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒔𝒕𝒆 *500* 🪙 𝑷𝒆𝒔𝒐𝒔 *.` 
   user.exp += 500
   user.lastclaim = new Date * 1
   await conn.reply(m.chat, txt, m adReply)
}

handler.help = ['claim']
handler.tags = ['rpg']
handler.command = ['daily', 'claim']
handler.register = true 
handler.cooldown = cooldown

export default handler
