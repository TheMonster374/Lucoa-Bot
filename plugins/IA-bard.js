import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}

if (!text) return conn.reply(m.chat, `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*, !bard conoces la omniprecencia?`,  fakevoimg )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜`, m, fkontak, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ia']


export default handler
