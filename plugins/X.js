const members = metadata.participants.length 
let by = [`${lenguaje['smsBye']()} @${name.split("@")[0]} 👋`, `${lenguaje['smsBye2']()} @${name.split("@")[0]} 👋\n\n${lenguaje['smsBye3']()}`, `_@${name.split("@")[0]} ${lenguaje['smsBye4']()}`]
let byegc = fs.readFileSync('./src/byegc.webp')
let or = ['texto', 'texto2', 'stickers'];
let media = or[Math.floor(Math.random() * 3)]
let bye = by[Math.floor(Math.random() * by.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: bye, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `\`\`\`[!] C fue alv : @${name.split("@")[0]} 😹\`\`\``,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": '乂 ＡＤＩＯ́Ｓ 乂', 
body: `Esperemos que no vuelva -_-`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'stickers')
sock.sendFile(anu.id, byegc, 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '乂 ＡＤＩＯ́Ｓ 乂', body: `${name.split("@")[0]}`, mediaType: 2, sourceUrl: `${pickRandom([md, yt])}`, thumbnail: leave}}})

handler.command = /^bye$/i;
