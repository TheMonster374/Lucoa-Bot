const handler = async (m, {conn, text, args, usedPrefix, command}) => {

  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';  
  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: { name: 'axd' ['grupo abrir','grupo cerrar']: 1,} };
  
/*if (command == 'A') {
if (!text) return conn.sendPoll(m.chat, `\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
  conn.relayMessage(m.chat, sendPoll, {quoted: m});
if (args[0] === 'abrir') {
m.reply('grupo abierto')
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply('grupo cerrado')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
}
*/
handler.command = /^(A)$/i;

export default handler;
