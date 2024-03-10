import db from '../lib/database.js'

let handler = async (m, { conn  }) => {
    conn.advnro = conn.advnro ? conn.advnro : {}
    if (conn.advnro[m.chat]) return m.reply('Todavia hay preguntas sin responder en este chat')
    conn.advnro[m.chat] = { number: (9).getRandom(), time: 60000, bonus: 1000, opp: 5
    }
    let teks = `Adivina el numero 1234567890

tiempo: ${(conn.advnro[m.chat].time / 1000).toFixed(2)} segundos
bono: +${conn.advnro[m.chat].bonus} Pesos`
    let idmsg = await m.reply(teks)
    setTimeout(() => {
      if (conn.advnro[m.chat]) conn.reply(m.chat, `*se acabo el tiempo!*
      
Respuesta: ${conn.advnro[m.chat].number}`, m, { quoted: idmsg })
      delete conn.advnro[m.chat]
    }, conn.advnro[m.chat].time)
}

handler.help = ['advn']
handler.tags = ['game']
handler.command = /^(adivinaelnumero|advn)$/i

export default handler
