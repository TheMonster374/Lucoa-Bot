import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*, \n\n!bard hola?`,  m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `Ha Habido un error`, m, fake, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']


export default handler
