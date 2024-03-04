import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*, !bard hola?`,  m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `𝐻𝑎 𝐻𝑎𝑏𝑖𝑑𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟`, m, fake, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ia']


export default handler
