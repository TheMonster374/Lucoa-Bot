import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'ingresa un texto de la imagen que quieres* 🐶'
    let msg = encodeURIComponent(text)
    let res = await fetch(`https://aemt.me/bingimg?text=${msg}`)
    let data = await res.json()
    console.log(data)
    let buffer = data.result
    conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m)
}

handler.help = ['iaimagen <query>']
handler.tags = ['AI']
handler.command = /^iaimagen$/i

export default handler
