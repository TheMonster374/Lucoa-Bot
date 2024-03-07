let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `[📚] debes ingresar un enlace \n *Ingrese el enlace de un grupo.\n\n*[💡] ejemplo:*\n*#join ${group}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*Jotchua-Mini se unio correctamente al grupo*

*Jotchua-Mini se unio correctamente al grupo*

‼️ si de lo contrario no se unio a tu grupo, verifica que no se haya eliminado o salido recientemente el bot `
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*\n ' + link, jid)

m.reply(`${ag}*✅ TU ENLACE SE ENVIO A MI PROPIETARIO*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *SU GRUPO SERÁ EVALUADO Y QUEDARÁ A DE MI PROPIETARIO SI Jotchua-Mini SE UNE A TU GRUPO*\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n *❕ES POSIBLE QUE SU SOLICITUD DE UNIR AL BOT A TU GRUPO SEA RECHAZADA POR LAS SIGUIENTES CAUSAS:*\n*1️⃣ El Bot está Saturado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de jotchua-Mini*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['main']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
