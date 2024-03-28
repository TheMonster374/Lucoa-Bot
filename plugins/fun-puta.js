let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber q tan puta es*`
let gay2 = `
 *${text} ES ${Math.floor(Math.random() * 600)}% PUTA, ESCRIBANLE AL PRIV*.
    `.trim(); m.reply(gay2, null, { mentions: conn.parseMention(gay2) })}


handler.help = ['puta'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(puto|puta)/i
handler.fail = null
handler.register = true
export default handler
