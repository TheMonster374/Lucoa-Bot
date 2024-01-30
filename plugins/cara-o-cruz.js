 //BY: VIRUZZ-OFC

let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let time = global.db.data.users[m.sender].wait + 40000
let textos = `\`\`\`CARA O CRUZ\n\nPUEDES ELEGIR LA OPCION USADO LOS COMANDO\n\n${usedPrefix + command} cara\n${usedPrefix + command} cruz\n\n${wm}\`\`\``
if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 Espera ${Math.floor((time - new Date()) / 1000)} Segundos antes de volver a jugar*`, fkontak, m)
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
//conn.sendHydrated(m.chat, '*Cara o Cruz*\n\nPuedes eleguir la opción con los botones o usa los comandos:\n.suerte cruz\n.suerte cara\n\n usar en minúsculas',wm, pp, null, null, null, null, [['Cara', `${usedPrefix + command} cara`],['Cruz', `${usedPrefix + command} cruz`]], m)
var astro = Math.random()
if (astro < 0.50) {//34
    astro = 'cara'
} else if (astro > 0.50){//34
astro = 'cruz' 
}
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].limit += 2
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} ELEGISTE: ${text}\n┃🐶 RESULTADOS: ${astro}\n┃💰 PREMIO: ${[money0].getRandom()} Diamantes\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].limit += 2
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃💰 Premio: ${[money0].getRandom()} Diamantes\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].exp -= 300
//global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ PERDISTE ]━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃📈 Perdiste: ${[money0].getRandom()} pesos\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].limit += 3
//global.db.data.users[m.sender].exp += 1000
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃💰 Premio: ${[money0].getRandom()} DIAMANTES\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ PERDISTE ]━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃📈 Perdiste: ${[money0].getRandom()} Pesos\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
}
}else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].exp += 100
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃💰 P: ${[money0].getRandom()} Pesos\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ PERDISTE ]━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃📈 perdiste: ${[money0].getRandom()} Pesos\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
}} else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].exp += 300
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃💰 Premio: ${[money0].getRandom()} Pesos\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who)  
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 100
m.reply(`╭━━━━[ PERDISTE ]━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃📈 PERDISTE: ${[money0].getRandom()} PESOS\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 300
m.reply(`╭━━━━[ GANASTE ]━━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 Resultado: ${astro}\n┃💰 Premio: ${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 1000
m.reply(`╭━━━━[ PERDISTE ]━━⬣\n┃${name} Elegiste: ${text}\n┃🐶 RESULTADO: ${astro}\n┃📈 PERDISTE: ${[money0].getRandom()} PESOS\n╰━━━━━━[𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭]━━━━━⬣`)
}
global.db.data.users[m.sender].wait = new Date * 1
}}
handler.help = ['suerte']
handler.tags = ['games']
handler.command = /^(suerte)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
