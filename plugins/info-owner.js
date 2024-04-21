let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;◣w◢ Monster;;\nFN:◣w◢⁩⁩Monster\nORG:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nTITLE:\nitem1.TEL;waid=573136737414:573136737414\nitem1.X-ABLabel:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:◣w◢\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '◣w◢ Monster', contacts: [{ vcard }] }}, {quoted: m})
  await m.reply('Contactate con mi creador solo para asuntos sobre el bot')
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
