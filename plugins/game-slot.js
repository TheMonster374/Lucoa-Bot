/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `𝙐𝙨𝙖𝙧 𝙙𝙚𝙡 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖:

𝙀𝙟𝙚𝙢𝙥𝙡𝙤:
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]

if (apuesta < 10) throw `𝑫𝒆𝒃𝒆𝒓 𝒅𝒆𝒍 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝒖𝒏 𝒎𝒊́𝒏𝒊𝒎𝒐 𝒅𝒆 *10*`

if (users.exp < apuesta) {
throw `𝑵𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂 𝒑𝒂𝒓𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝒆𝒙𝒑, 𝒍𝒆 𝒓𝒆𝒄𝒐𝒎𝒊𝒆𝒏𝒅𝒐 𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒖𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒎𝒂́𝒔 𝒓𝒆𝒄𝒖𝒓𝒔𝒐𝒔`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*𝑽𝒖𝒆𝒍𝒗𝒂 𝒆𝒏 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 𝒂 𝒑𝒐𝒔𝒕𝒂𝒏𝒅𝒐 𝒆𝒙𝒑* 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} EXP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +50 EXP*`
users.exp += 50
} else {
end = `😿 *HA PERDIDO!! ❌ -${apuesta} EXP*`
users.exp -= apuesta
}

await delay(5000)
let s = `🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}

// Resto del código omitido por brevedad...

handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
handler.register = true
    
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}

export default handler
