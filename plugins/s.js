
const handler = async (m, {conn, isAdmin, isOwner, args, Prefix, command}) => {

  if (!(isAdmin || isOwner)) {
if (!text) return conn.sendPoll(m.chat, `hola\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply('hola')
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply('grupo')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}

handler.command = /^(grupo)$/i;
export default handler;
