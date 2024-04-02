let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/nsfw/ahegao?apikey='-'`, 'Kemii.jpg', '```Success...\nDont forget to donate```', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']

handler.command = /^(binario)$/i

export default handler
