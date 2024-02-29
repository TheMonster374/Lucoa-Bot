import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsTikTok6}\n*${usedPrefix + command} Gata_Dios*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `👤 ${mid.user} 
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ ${mid.name}
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ ${mid.smsinsta1}
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️ ${mid.smsinsta2}
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️ ${mid.smsinsta5}
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁 ${mid.smsinsta3}
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀 ${mid.smsinsta4}
${json.result.bio}`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalkear']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler

