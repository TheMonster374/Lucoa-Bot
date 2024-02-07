let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ALS⁩;;\nFN:ALS⁩\nORG:ALS\nTITLE:\nitem1.TEL;waid=5491144775561:5491144775561\nitem1.X-ABLabel:ALS⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ALS\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
