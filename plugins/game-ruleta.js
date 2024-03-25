let handler = async (m, { conn, args, text, usedPrefix, command }) => {

    const ruletaresultado = "https://telegra.ph/file/116e9ac82c5f266911c45.mp4"

    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 || !color) throw `*_ingresa la cantidad que quieres apostar y el color rojo o negro._*`
    let colores = ['rojo', 'negro']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 10) throw `*_Lo minimo para apostar son 10 Pesos 🪙_*.`
    if (!colores.includes(color)) throw '*_Debes especificar un color válido: rojo o negro_*'
    if (user.exp < amount) throw '*_¡No tienes suficiente pesos!_*'
    if (amount > 100000) throw `*_No puedes apostar mas de 100000 Pesos 🪙_.*`
    let result = ''
    if (colour == color) {
        result = `${colour == 'rojo' ? '*La pelota paro en el color:* 🔴' : '*La pelota paro en el color:* ⚫'} \n\n *+ ${amount * 2} Pesos 🪙*`
        user.exp += amount * 2
    } else {
        result = `${colour == 'rojo' ? '*La pelota paro en el color:* 🔴' : 'La pelota paro en el color:* ⚫'} \n\n *- ${amount} Pesos 🪙*`
        user.exp -= amount
    }
    /*conn.sendMessage(m.chat, { video: { url: ruletaresultado }, caption: result }, { quoted: m })
*/
    conn.sendMessage(m.chat, { video: { url: ruletaresultado }, gifPlayback: true, caption: result }, mentions: [m.sender] }, { quoted: m })
}
handler.help = ['ruleta apuesta/color']
handler.tags = ['game']
handler.command = ['ruleta', 'rt']


export default handler
