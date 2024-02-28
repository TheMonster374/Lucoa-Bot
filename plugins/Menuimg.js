const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `──────────────────────
			𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺

╔════📄 𝑰𝒏𝒇𝒐 📄══════╗
║╭───────────────···
║│ .menu2
║│ .help2
║│ .?2
║│ .menuaudios
║│ .info
║│ .grupos
║│ .owner
║│ .totalplugins
║│ .runtime
║│ .runtime2
║╰────────────────···
╚══════════════════╝

> 𝑩𝒚 𝑨𝑳𝑺
`
 await  conn.sendMessage(m.chat,{ image:{ url: "https://telegra.ph/file/5d9c66a4a6a935e98c5db.jpg", }, caption: str,  
 contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `J O T C H U A - M I N I`,  
 sourceUrl: "https://atom.bio/als", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/5d9c66a4a6a935e98c5db.jpg",  
 }, }, }, { quoted: m,});}};
handler.help = ['']
handler.tags = ['']
handler.command = /^(XD)$/i
handler.fail = null
export default  handler
