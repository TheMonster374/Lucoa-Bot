const handler = async (m, {conn, text, args, usedPrefix, command}) => {

if (command == 'grupo') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendPoll(m.chat, `hola\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply('a')
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply('xd')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}

handler.command = ['grupo'];
export default handler;
