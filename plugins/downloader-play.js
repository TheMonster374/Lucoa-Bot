import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `🚩 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒇𝒐𝒓𝒎𝒂𝒕𝒐 𝒆𝒏 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒎á𝒔 𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒎𝒖𝒔𝒊𝒄𝒂 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.*\n\n[ 🐶 ] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐 : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\n𝑭𝒐𝒓𝒎𝒂𝒕𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆𝒔 :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m)
    if (lister.includes(feature)) {
       if (feature == "mp3" || feature == "yta" || feature == "audio") {
            if (!inputs) return conn.reply(m.chat, `*🚩 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒎𝒖𝒔𝒊𝒄𝒂 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.*`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
    let txt = `╭──────────✰\n`
	   txt += `│📄 *Título ∙* ${vid.title}\n`
       txt += `│🕜 *Duración ∙* ${vid.timestamp}\n`
       txt += `│👁 *Visitas ∙* ${vid.views}\n`
       txt += `│📚 *Autor ∙* ${vid.author.name}\n`
       txt += `│📅 *Publicado ∙* ${vid.ago}\n`
       txt += `│⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
let buttonMessage= {
'document': { url: `https://github.com/AleXD0009/jotchua-mini` },
'mimetype': `application/pdf`,
'fileName': `𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑷𝒍𝒂𝒚 📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch (error) {
        await conn.reply(m.chat,`*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*`, m)
        console.error(error)
    }}}
        
        if (feature == "mp4" || feature == "ytv" || feature == "video" || feature == "video") {
            if (!inputs) return conn.reply(m.chat, `🚩 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒎𝒖𝒔𝒊𝒄𝒂 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = `╭──────────✰\n`
	   txt += `│📄 *Título ∙* ${vid.title}\n`
       txt += `│🕜 *Duración ∙* ${vid.timestamp}\n`
       txt += `│👁 *Visitas ∙* ${vid.views}\n`
       txt += `│📚 *Autor ∙* ${vid.author.name}\n`
       txt += `│📅 *Publicado ∙* ${vid.ago}\n`
       txt += `│⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
let buttonMessage= {
'document': { url: `https://github.com/AleXD0009/jotchua-mini` },
'mimetype': `application/pdf`,
'fileName': `𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑷𝒍𝒂𝒚 📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐 🐶 `, m)
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐 🐶 `, m)
       } catch (error) {
        await conn.reply(m.chat,`*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*`, m)
        console.error(error)
    }}}
    
    if (feature == "mp3doc" || feature == "ytadoc" || feature == "audiodoc") {
            if (!inputs) return conn.reply(m.chat, `🚩 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒎𝒖𝒔𝒊𝒄𝒂 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	let txt = `╭──────────\n`
	   txt += `│📄 *Título ∙* ${vid.title}\n`
       txt += `│🕜 *Duración ∙* ${vid.timestamp}\n`
       txt += `│👁 *Visitas ∙* ${vid.views}\n`
       txt += `│📚 *Autor ∙* ${vid.author.name}\n`
       txt += `│📅 *Publicado ∙* ${vid.ago}\n`
       txt += `│⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────\n\n`
let buttonMessage= {
'document': { url: `https://github.com/AleXD0009/jotchua-mini` },
'mimetype': `application/pdf`,
'fileName': `𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑷𝒍𝒂𝒚 📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch (error) {
        await conn.reply(m.chat,`*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*`, m)
        console.error(error)
    }}}
    
    if (feature == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `🚩 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒎𝒖𝒔𝒊𝒄𝒂 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = `╭──────────\n`
	   txt += `│📄 *Título ∙* ${vid.title}\n`
       txt += `│🕜 *Duración ∙* ${vid.timestamp}\n`
       txt += `│👁 *Visitas ∙* ${vid.views}\n`
       txt += `│📚 *Autor ∙* ${vid.author.name}\n`
       txt += `│📅 *Publicado ∙* ${vid.ago}\n`
       txt += `│⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────\n\n`
let buttonMessage= {
'document': { url: `https://github.com/AleXD0009/jotchua-mini` },
'mimetype': `application/pdf`,
'fileName': `𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑷𝒍𝒂𝒚 📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐 🐶 `, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒑𝒆𝒔𝒂 𝒎𝒂𝒔  𝒅𝒆 ${limit} 𝑴𝑩, 𝑺𝒆 𝒄𝒂𝒏𝒄𝒆𝒍𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐 🐶 `, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       } catch (error) {
        await conn.reply(m.chat,`*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*`, m)
        console.error(error)
}}}}}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play']
export default handler
