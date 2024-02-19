import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `enviando`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🕳🕳🕳🕳`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🕳🕳🕳🕳🕳🕳🕳`, edit: key});
await conn.sendMessage(m.chat, {text: `mi creador ALS se retira de los bots, talvez temporal o permanentemente`, edit: key});
  } else throw 'eh'
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner','creador'] 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
