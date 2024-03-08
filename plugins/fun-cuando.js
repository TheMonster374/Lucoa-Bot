let handler = async (m, { conn, command, text }) => {
  if (!text) {
    return conn.reply(m.chat, `[📚] Por favor, proporciona un texto\n\n*[💡] Ejemplo:* .cuando morire`, m)
}
    conn.reply(m.chat, `
  *Pregunta:* ${command} ${text}?
  *Respuesta:* Dentro de ${Math.floor(Math.random() * 10)} ${pickRandom(['Segundos', 'Minutos', 'Horas', 'Dias', 'Semanas', 'Meses', 'Años', 'Decadas', 'Siglos'])} 
  `.trim(), m, m.mentionedJid ? {
      contextInfo: {
        mentionedJid: m.mentionedJid
      }
    } : {})
  }
  handler.help = ['cuando'].map(v => v + ' <pregunta>')
  handler.tags = ['fun']
  handler.command = /^cuando?$/i
  
  export default handler
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }
  
