let handler = async (m, { conn, command }) => {
    const handler = async (m, { conn, command, text }) => {
    try {
        if (!text) throw `*Por favor, menciona el usuario al que quieres enviar el mensaje.*`;

        // Obtiene el usuario mencionado en el texto del comando
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
