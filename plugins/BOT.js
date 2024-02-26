const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `rodi gay
`
 await  conn.sendMessage(m.chat,{ image:{ url: "https://telegra.ph/file/d675b0f7778b8284067d5.jpg", }, caption: str,  
 contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `MENU - AUDIOS`,  
 sourceUrl: "http://paypal.me/DorratBotOficial", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/d675b0f7778b8284067d5.jpg",  
 }, }, }, { quoted: m,});}};
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(XD)$/i
handler.fail = null
export default  handler
