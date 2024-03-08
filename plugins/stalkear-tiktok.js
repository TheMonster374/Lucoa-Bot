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
let gata = `👤 nombre
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ pronombre
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ seguidores
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️ seguidos
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️ total likes
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁 xd
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀 descripcion
${json.result.bio}`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
await conn.reply(m.chat, `Error ${usedPrefix + command}\n\n${wm}`, m)
console.log(`ocurrio un error`)
console.log(e)
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler

