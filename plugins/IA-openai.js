import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  try {
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.clayzaaubert.my.id/api/others/chatgpt?q=${text}&apikey=${global.clayza}`)
    let zel = await res.json()
   let content = zel.data.content.replace(/\[DONE\]/g, '').replace(/\\n/g, '\n');
   m.reply(content);
  } catch (error) {
    // Jika terjadi kesalahan lainnya
    conn.reply(m.chat, 'Limit Harian Sudah tercapai', m);
    console.log(error);
  } 
}
handler.help = ['openai','ai']
handler.tags = ['ia']
handler.command = /^(openai)$/i

export default handler
