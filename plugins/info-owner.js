let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩;;\nFN:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nORG:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nTITLE:\nitem1.TEL;waid=5491144775561:5491144775561\nitem1.X-ABLabel:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
