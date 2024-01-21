import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [mysticbot, md, md, md]
let gata = [img5, img4, img3, img1, img2]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: https://www.youtube.com/watch?v=CcF3rfC43Fk,  thumbnail: https://www.youtube.com/watch?v=CcF3rfC43Fk
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: https://www.youtube.com/watch?v=CcF3rfC43Fk, sourceUrl: yt }}}
let dos = https://www.youtube.com/watch?v=CcF3rfC43Fk    

let user = global.db.data.users[m.sender]
let premium = user.premium

let limit = `${pickRandom([15, 23, 29, 36, 42, 50, 59, 65, 70, 83])}` * 1
let limitpremium = `${pickRandom([45, 59, 70, 88, 100, 120, 135, 143, 149, 150])}` * 1
 
const recompensas = {
  limit: premium ? limitpremium : limit,
  mythic: premium ? legendarypremium : legendary,
}

let time = user.lastmonthly + 432000000 //432000000 5 dias
if (new Date - user.lastmonthly < 432000000) return await conn.reply(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙈𝙀𝙉𝙎𝙐𝘼𝙇 🌅\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙏𝙃𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿 🌅\n\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : 𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉\n${clockString(time - new Date() * 1)}`, fkontak,  m)
//await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙈𝙀𝙉𝙎𝙐𝘼𝙇 🌅\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙏𝙃𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿 🌅`, wm + `\n\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : 𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉\n${clockString(time - new Date() * 1)}`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
let pp = 'https://i.imgur.com/IXlUwTW.jpg'
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `}
let text = `╭━━🏄‍♂️━⛷️━🤾‍♀️━━⬣
┃ 🏅 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙈𝙀𝙉𝙎𝙐𝘼𝙇!!!
┃ 🎖️ 𝙈𝙊𝙉𝙏𝙃𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿!!!
┃ *${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*
┃ ${texto}
╰━━🧘‍♂️━🤺━🚴‍♀️━━⬣\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`
 user.lastmonthly = new Date * 1
}
handler.command = ['monthly', 'cadames', 'mes', 'mensual', 'entregadelmes'] 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃⇢ ', ye, ' *🗓️ Años : Year*\n', '┃⇢ ', mo, ' *⛅ Mes : Month*\n', '┃⇢ ', d, ' *☀️ Días : Days*\n', '┃⇢ ', h, ' *⏰ Horas : Hours*\n', '┃⇢ ', m, ' *🕐 Minutos : Minutes*\n', '┃⇢ ', s, ' *⏱️ Segundos : Seconds*'].map(v => v.toString().padStart(2, 0)).join('')
}
