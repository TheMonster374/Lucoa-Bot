
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  
const sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
if (!text) return conn.sendPoll(m.chat, `*$*${prefix + command} on*\n*${prefix + command} off*`, ['banchat on','banchat off'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === 'abrir') {
m.reply(`a`)
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(`xd`)
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
handler.command = /^(ban)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
