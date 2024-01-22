   case 'TEST':
          let owner = `「 *Creador* 」\n Hola ${pushname} 👋🏻 mi numero es : wa.me/5492616532494`
conn.sendMessage(m.chat, {
    text: owner,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `Megu - Bot 🔥`,
        body: "Mi Canal de YT 🕊️",
        thumbnailUrl: "https://i.ibb.co/S37DL7B/images-1-1.jpg",
        sourceUrl: "http://youtube.com/@Kriz_Chaan",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
