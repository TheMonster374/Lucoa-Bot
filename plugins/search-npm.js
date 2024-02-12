import fetch from 'node-fetch'

var handler = async (m, { text }) => {

if (!text) return conn.reply(m.chat, '🎌 *Ingrese lo que esta buscando*\n\nEjemplo, !npmjs module', m, )
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) return conn.reply(m.chat, `🚩 *La solicitud "${text}" no funciona*`, m)

let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_` }).join`\n\n`
conn.reply(m.chat, txt, m)

}
handler.help = ['npmsearch']
handler.tags = ['search']
handler.command = /^npmjs|npmsearch?$/i

export default handler
