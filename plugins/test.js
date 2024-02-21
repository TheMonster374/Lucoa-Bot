import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Format: *.anime Kata Kunci*`
  let res = await fetch(global.API('https://api.jikan.moe', '/v4/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.data[0]
let animeingfo = `Judul: *${title}*
episodio: *${episodes}*
Fecha de inicio: *${start_date}*
Fecha final: *${end_date}*
Tipo de espectáculo: *${type}*
Rango: *${rated}*
Puntaje: *${score}*
Miembro: *${members}*
Resumen: *${synopsis}*
URL: *${url}*`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime'].map(v => v + ' <judul>')
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
export default handler
