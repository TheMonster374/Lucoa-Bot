import { tmpdir } from 'os'
import { join } from 'path'
import fs from 'fs'
let handler = async (m, { args, text, usedPrefix, command }) => {
	let info = `${usedPrefix + command} 𝑨𝒏𝒕𝒊𝒈𝒖𝒐 𝒏𝒐𝒎𝒃𝒓𝒆 | 𝑵𝒖𝒆𝒗𝒐 𝒏𝒐𝒎𝒃𝒓𝒆

*📌_ • 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:_*
➞ ${usedPrefix + command} inv | rpg-inv

*_🗒️ • 𝑵𝒐𝒕𝒂:_*
𝒏𝒐 𝒖𝒔𝒆 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 .𝒋𝒔 𝒂𝒍 𝒇𝒊𝒏𝒂𝒍 𝒅𝒆 𝒍𝒂 𝒐𝒓𝒂𝒄𝒊𝒐𝒏 𝒚 𝒕𝒓𝒂𝒕𝒆 𝒒𝒖𝒆 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 𝒏𝒐 𝒍𝒍𝒆𝒗𝒆 𝒆𝒔𝒑𝒂𝒄𝒊𝒐𝒔 "𝒓𝒑𝒈- 𝒊𝒏𝒗"`
if (!args[0]) throw info
if (!args[1] == "|") throw `• *📌_ • 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:_*:
➞ ${usedPrefix + command} inv | rpg-inv`
if (!args[2]) throw `• example:
➞ ${usedPrefix + command} inv | rpg-inv`

let from = args[0]
let to = args[2]

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!ar1.includes(args[0])) return m.reply(`*[ ❌ ] 𝑵𝑶 𝑬𝑵𝑪𝑶𝑵𝑻𝑹𝑨𝑫𝑶!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
await fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)
conn.reply(m.chat, `Succes changes "plugins/${from}.js" to "plugins/${to}.js"`, m)
    
}
handler.help = ['renameplugin'].map(_=> _ + " *<nombre viejo> | <nombre nuevo>*")
handler.tags = ['owner']
handler.command = /^(r(ename(file)?|f)|renameplugin)$/i

handler.mods = true

export default handler
