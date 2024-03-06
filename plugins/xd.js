import { performance } from 'perf_hooks'
let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
let time = user.prue + 600000 //10 min
if (new Date - user.prue < 600000) return await conn.reply(m.chat, `🙌 HEY ALTO ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO NO HAGA SPAM`, m)
let start = `𝑃𝑟𝑒𝑝𝑎𝑟𝑎𝑛𝑑𝑜 𝑎𝑟𝑚𝑎𝑠 𝑝𝑎𝑟𝑎 𝑚𝑎𝑡𝑎𝑟 𝑎 𝑠𝑛𝑖𝑝𝑒`
let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`
await delay(1 * 1000)
const { key } = await conn.sendMessage(m.chat, {text: start}, {quoted: m});
await delay(1 * 1000)
await conn.sendMessage(m.chat, {text: boost, edit: key});
await delay(1 * 1000)
await conn.sendMessage(m.chat, {text: boost3, edit: key});
await delay(1 * 1000)
await conn.sendMessage(m.chat, {text: boost5, edit: key});
  
  
//DATOS FALSOS | FALSE DATA
let kill = `*${pickRandom(['le cortaste el cuello a snipe con un cuchillo','245.168.75.53','59.49.9.213','203.23.8.207','110.189.95.186','17.151.187.183','30.209.37.141','67.52.216.173','161.107.62.117','89.168.137.231','48.247.249.251','135.158.198.206','170.57.189.55','252.0.180.120','254.180.198.115','85.188.238.220','196.88.207.113','57.84.238.99','50.132.72.227','92.28.211.234','33.211.234.00','122.238.1.2434','873.282.11.89','123.009.011.774','333.228.201.236'])}%*`  



let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*✅ Mataste a snipe con Exito*\n\n*𝑻𝒊𝒆𝒎𝒑𝒐: ${speed} 𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔!*

*mataste a snipe de la siguiente manera:* ${kill}`

await conn.sendMessage(m.chat, {text: doxeo, edit: key});
//conn.reply(m.chat, doxeo, m)
user.prue = new Date * 1  
}
handler.help = ['doxear <nombre> | <@tag>']
handler.tags = ['fun']
handler.command = /^matarsnipe/i
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  
