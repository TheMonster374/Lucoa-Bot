import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  try {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/doujin-search?q=${text}&apikey=${global.clayza}`)
  let json = await res.json()
  json = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Status:* ${v.status}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, '', json, m)
  } catch (error) {
    // Jika terjadi kesalahan lainnya
    conn.reply(m.chat, 'Limit Harian Sudah tercapai', m);
    console.log(error);
  }
}
handler.help = ['doujinsearch']
handler.tags = ['search']
handler.command = /^(doujinsearch)$/i

export default handler
