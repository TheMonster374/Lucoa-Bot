import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw '[📚] 𝑖𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑑𝑒 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑞𝑢𝑒 𝑞𝑢𝑖𝑒𝑟𝑒𝑠 \n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* \n.bingimg mono en el espacio'
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
