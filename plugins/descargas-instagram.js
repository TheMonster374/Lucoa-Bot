 
import fetch from 'node-fetch'
import axios from 'axios';
import cheerio from 'cheerio'; 
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ ${mssg.useCmd}\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)

   let res = await igdl(args[0])
    for (let result of res.data) {
    conn.sendFile(m.chat, result.url, 'igdl.mp4', `✅ ${mssg.result}`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true
