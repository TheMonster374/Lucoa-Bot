const handler = async (m, {conn, text, args, usedPrefix, command}) => {
if (!text) return conn.sendPoll(m.chat, `hola\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply('a')
} else if (args[0] === 'cerrar') {
m.reply('xd')
}
  };
handler.command = ['grupo'];
export default handler;
