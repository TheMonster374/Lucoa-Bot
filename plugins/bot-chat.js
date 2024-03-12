export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`Hola ${username}¡!
soy Jotchua-Mini, un bot de whatsapp con multiples comandos

`Escribe` !comandos `si quieres ver los comandos que tengo`


*Escribe !grupos Para Ver Los Grupos Oficiales Del Bot*

`) 
user.pc = new Date * 1
}
