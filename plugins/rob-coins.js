let ro = 2000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a robar*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `*[❗] Etiqueta a alguien para robar.*`
if (!(who in global.db.data.users)) throw `*[❗] El usuario no se encuentra en mi base de datos.*`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.money < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} coins*\nNo robes a un pobre v":`, null, { mentions: [who] })    
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`*‣ Robaste ${rob} COINS 🪙 a @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['robcoins']
handler.tags = ['rpg']
handler.command = ['robar3', 'rob3', 'robcoins']
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
