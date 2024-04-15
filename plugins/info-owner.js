let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;◣w◢;;\nFN:◣w◢⁩⁩\nORG:Monster  - [◣w◢]⁩\nTITLE:\nitem1.TEL;waid=5493804170925:5493804170925\nitem1.X-ABLabel:Monster  - [◣w◢]\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:◣w◢\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '◣w◢', contacts: [{ vcard }] }}, {quoted: m})
  await m.reply('enviar mensaje solo para cosas del bot')
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
