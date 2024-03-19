let handler = async (m, { conn, command }) => {
    let user = text.trim();
    let porcentaje = Math.floor(Math.random() * 501); // Generar un número aleatorio entre 0 y 500
    conn.reply(m.chat, `*${user} ES ${porcentaje}% PUTA, ESCRIBANLE AL PRIV*.`, null, { mentions: [user] })
}

handler.help = ['puta'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(puto|puta)/i
handler.fail = null
handler.register = true
export default handler
