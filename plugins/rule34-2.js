import { googleImage, pinterest } from '@bochilteam/scraper'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
if (db.data.chats[m.chat].modohorny == false && m.isGroup) return conn.sendButton(m.chat, '❗ comandso nfw estan desactivados dile a un admin que lo active',`⻝ informacion: ${week} ${date}\n⻝ tiempo: ${wktuwib}`, null, [['ᴇɴᴀʙʟᴇ', '.on modohorny']], m)
	
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendFile(m.chat, res, 'rule34.jpg', ` \`\`\`➩ Random Nsfw Rule34 ${text ? text.capitalize() : false}\`\`\` `,  m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34-2']
export default handler
