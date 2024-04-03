let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*Etiqueta o responde un sms de la persona que desea retirar la advertencia*\nEjemplo:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '*El usuario no tiene advertencias*'  
user.warn -= 1
await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}`} Se le ha retirado una advertencia*\n*ADVERTENCIAS ${user.warn}/4*`, null, { mentions: [who]})}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.help = ['warn *@mención*']
handler.tags = ['owner']
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
