if (command == 'mediafire') {
const { mediafireDl } = require('../lib/mediafire.js') 
if (!text) return m.reply(`uso incorrecto, ejemplo\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 1500) return reply(No puedo descarga el archivo supera el limite 900 MB + util.format(baby1))
const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE* 
┆——————«•»——————
┆🔸️ nombre ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ tamaño ${baby1[0].size} 
┆——————«•»——————
┆🔸️ extension ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\nB` 
m.reply(`error`) 
 conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{ 
   title: wm, 
   body:"💫", 
   showAdAttribution: true, 
   mediaType:2, 
   thumbnail: fs.readFileSync(`./menu.png`) , 
   mediaUrl: md,  
 sourceUrl: md }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
 db.data.users[m.sender].limit -= 2
m.reply('2 ' + info.limit)}}
