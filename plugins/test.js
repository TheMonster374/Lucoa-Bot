const handler = async (m, {conn, text, args, usedPrefix, command}) => {

conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }

  
if (command == 'A') {
if (!text) return conn.sendPoll(m.chat, `\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply('grupo abierto')
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply('grupo cerrado')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}

handler.command = /^(A)$/i;
}
