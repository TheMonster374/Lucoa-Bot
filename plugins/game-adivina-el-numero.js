import db from '../lib/database.js'

let handler = async (m, { conn  }) => {
    conn.advnro = conn.advnro ? conn.advnro : {}
    if (conn.advnro[m.chat]) return m.reply('𝑇𝑜𝑑𝑎𝑣í𝑎 ℎ𝑎𝑦 𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎𝑠 𝑠𝑖𝑛 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟 𝑒𝑛 𝑒𝑠𝑡𝑒 𝑐ℎ𝑎𝑡')
    conn.advnro[m.chat] = { number: (9).getRandom(), time: 60000, bonus: 1000, opp: 5
    }
    let teks = `𝐴𝑑𝑖𝑣𝑖𝑛𝑎 𝑒𝑙 𝑛ú𝑚𝑒𝑟𝑜 1234567890

𝑇𝑖𝑒𝑚𝑝𝑜: ${(conn.advnro[m.chat].time / 1000).toFixed(2)} segundos
𝐵𝑜𝑛𝑜: +${conn.advnro[m.chat].bonus} Exp`
    let idmsg = await m.reply(teks)
    setTimeout(() => {
      if (conn.advnro[m.chat]) conn.reply(m.chat, `*𝑆𝑒 𝑎𝑐𝑎𝑏ó 𝑒𝑙 𝑡𝑖𝑒𝑚𝑝𝑜!*
      
𝑅𝑒𝑠𝑝𝑢𝑒𝑠𝑡𝑎: ${conn.advnro[m.chat].number}`, m, { quoted: idmsg })
      delete conn.advnro[m.chat]
    }, conn.advnro[m.chat].time)
}

handler.help = ['advn']
handler.tags = ['game']
handler.command = /^(adivinaelnumero|advn)$/i

export default handler
