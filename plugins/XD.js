let handler = async (m, {
let handler = async (m, { conn, text }) => {
  try {
    if (!text) return m.reply(Func.example(usedPrefix, command, 'moon-bot'))
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image\/(jpe?g|png)/.test(mime)) {
      try {
        let img = await q.download()
        let res = await scrap.uploader(img)
        let respon = await Func.fetchJson(API('alya', '/api/func-chat', { model: 'gemini', system: text, image: res.data.url }, 'apikey'))
        if (!respon.status) return m.reply(Func.jsonFormat(respon))
        m.reply(respon.data.content)
      } catch (i) {
        return conn.reply(m.chat, Func.jsonFormat(i), m)
      }
    } else if (text) {
      const cok = await Func.fetchJson(API('alya', '/api/gemini', { q: text }, 'apikey'))
      if (!cok.status) return m.reply(Func.jsonFormat(cok))
      m.reply(cok.data.content)
    }
  } catch (e) {
    console.log(e)
    m.reply(ha habido un error)
  }
}
handler.help = ['gemini']
handler.tags = ['internet']
handler.command = /^(gemini)$/i
module.exports = handler
