export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`Hola ${username}¡!
¡Hola!, Soy Lucoa, un bot muy divertido de whatsapp

Escribe #menu y veras mis multiples funciones :D


*Escribe #grupos para ver mis grupos oficiales ;D*

`) 
user.pc = new Date * 1
}
