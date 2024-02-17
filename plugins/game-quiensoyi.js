let fetch = require('node-fetch')
let timeout = 120000
let handler = async (m, { conn, usedPrefix, command }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Aún quedan preguntas sin respuesta en este chat.', conn.siapakahaku[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let res = src[Math.floor(Math.random() * src.length)]
    console.log(res);
    let caption = `${res.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Escribe  ${usedPrefix}who  para obtener ayuda
`.trim()
    conn.siapakahaku[id] = [
        await m.reply(caption),
        res, 
        setTimeout(async () => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `¡Se acabó el tiempo!\nLa respuesta es*${res.data.jawaban}*`, ``, `Next`, `${usedPrefix+command}`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['quiensoy']
handler.tags = ['game']
handler.command = /^(quiensoy)/i

module.exports = handler
