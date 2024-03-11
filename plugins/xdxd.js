let handler = async (m, { conn, args, text, usedPrefix, command }) => {

    const ruletaresultado = "https://telegra.ph/file/561da43337232c7d6389a.mp4"

    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 || !color) throw `Error, ingrese el monto y el color rojo o negro.`
    let colores = ['rojo', 'negro']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 10) throw `Lo minimo para apostar son 10 Pesos.`
    if (!colores.includes(color)) throw 'Debes especificar un color válido: rojo o negro'
    if (user.exp < amount) throw '¡No tienes suficiente dinero!'
    if (amount > 100000) throw `No puedes apostar mas de 100000 Pesos.`
    let result = ''
    if (colour == color) {
        result = `${colour == 'rojo' ? 'La pelota paro en el color: 🔴' : 'La pelota paro en el color: ⚫'} \n\nGanaste ${amount * 2} Pesos`
        user.exp += amount * 2
    } else {
        result = `${colour == 'rojo' ? 'La pelota paro en el color: 🔴' : 'La pelota paro en el color: ⚫'} \n\nPerdiste ${amount} Pesos`
        user.exp -= amount
    }
    conn.sendMessage(m.chat, { video: { url: ruletaresultado }, caption: result }, { quoted: m })
}
handler.help = ['ruleta apuesta/color']
handler.tags = ['game']
handler.command = ['ruleta', 'rt']


export default handler
