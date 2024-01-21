
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) throw `✳️ ${mssg.notext}`
  try { 
    let res = await fetch('https://api.simsimi.vn/v1/simtalk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `text=${encodeURIComponent(text)}&lc=${lang}&key=`
  })
  let json = await res.json()
  m.reply(json.message.replace('simsimi', `jotchua`).replace('Simsimi', `jotchua`).replace('sim simi', `jotchua`))
} catch {
  m.reply(`❎ Intenta de nuevo mas tarde La api de SimSimi se cayo`)
}

}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
