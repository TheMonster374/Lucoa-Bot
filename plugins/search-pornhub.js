var fetch = require("node-fetch")
let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
  let res = await fetch(`https://api.xyroinee.xyz/api/search/pornhub?q=${text}&apikey=Gwreelly`)
  let anu = await res.json()
  anu = anu.results.map((v) => `*Title:* ${v.title}\n*Views:* ${v.views}\n*Link*: ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['pornhubsearch']
handler.tags = ['internet']
handler.command = /^(pornhubsearch)$/i
handler.premium = true

export default handler
