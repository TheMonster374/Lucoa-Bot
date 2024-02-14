import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw '*𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒅𝒆 𝒍𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔* \n\n[🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: bingimg mono en el espacio'
    let msg = encodeURIComponent(text)
    let res = await fetch(`https://aemt.me/bingimg?text=${msg}`)
    let data = await res.json()
    console.log(data)
    let buffer = data.result
    conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m)
}

handler.help = ['bingimg <texto>']
handler.tags = ['ia']
handler.command = /^bingimg$/i

export default handler
