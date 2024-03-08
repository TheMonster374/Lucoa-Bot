
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  
const sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
if (!text) return sendPoll(m.chat, `TEST`, ['banear on','banear off'])
  conn.relayMessage(m.chat, sendPoll, {quoted: m});*/

if (args[0] === "on") {
global.db.data.chats[m.chat].isBanned = true
m.reply('grupo baneado')
} else if (args[0] === "off") {  
global.db.data.chats[m.chat].isBanned = false
m.reply('grupo desbandeado')}}}


handler.command = /^(ban)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
