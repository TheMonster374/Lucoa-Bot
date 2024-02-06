import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*Ingrese una petición*\n\nEjemplo, !bard Conoces Jotchua-Bot?   
`*${lenguaje.avisos.text}*`;`, m, estilo, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*Ocurrió un fallo*`, m, estilo, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler
