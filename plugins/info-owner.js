let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;◣w◢;;\nFN:◣w◢⁩⁩\nORG:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nTITLE:\nitem1.TEL;waid=573017210155:573017210155\nitem1.X-ABLabel:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:◣w◢\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '◣w◢', contacts: [{ vcard }] }}, {quoted: m})
  await m.reply('enviar mensaje solo para cosas del bot')
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
