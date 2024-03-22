let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber q tan puta es*`
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    let porcentaje = Math.floor(Math.random() * 501); // Generar un número aleatorio entre 0 y 500
    conn.reply(m.chat, `*🏳️‍🌈🏳️‍🌈${taguser} ES ${porcentaje}% LESBIANA, QUE GAY🏳️‍🌈🏳️‍🌈*.`, null, { mentions: [user] })
}

handler.help = ['lesbiana'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(lesbiana)/i
handler.fail = null
handler.register = true
export default handler
