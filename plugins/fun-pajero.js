let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber q tan puta es*`
let pajero = `
    *${text} ES ${Math.floor(Math.random() * 600)}% PAJERO, MIREN AL VIRGEN *.
    `.trim(); m.reply(pajero, null, { mentions: conn.parseMention(pajero) })}


handler.help = ['pajero'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(pajera|pajero)/i
handler.fail = null
handler.register = true
export default handler
