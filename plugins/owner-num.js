let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ALS⁩;;\nFN:ALS⁩\nORG:ALS\nTITLE:\nitem1.TEL;waid=5491156673266:5491156673266\nitem1.X-ABLabel:ALS⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ALS\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ALS⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
