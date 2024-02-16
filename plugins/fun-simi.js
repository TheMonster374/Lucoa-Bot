import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=SGWN&text=${text}&badword=true`)
  let res = await api.json()
  m.reply(res.result)
}
handler.command = ['simi']
handler.tags = ['ai']
handler.help = ['simi']
export default handler
