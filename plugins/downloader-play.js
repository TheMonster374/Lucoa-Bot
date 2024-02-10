import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴇʟ ꜰᴏʀᴍᴀᴛᴏ ᴇɴ Qᴜᴇ ᴅᴇꜱᴇᴀꜱ ᴅᴇꜱᴄᴀʀɢᴀʀ ᴍᴀꜱ ᴇʟ ᴛɪᴛᴜʟᴏ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴍᴜꜱɪᴄᴀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.*\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m)
    if (lister.includes(feature)) {
        if (feature == "mp3") {
            if (!inputs) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴇʟ ᴛɪᴛᴜʟᴏ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴍᴜꜱɪᴄᴀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.* \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: play mp3 SUICIDAL-IDOL - ecstacy`, m)
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
'fileName': `ʏᴏᴜᴛᴜʙᴇ ᴘʟᴀʏ 📥`,
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
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
        await conn.reply(m.chat,`*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*`, m)
        console.error(error)
    }}}
        
        if (feature == "mp4") {
            if (!inputs) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴇʟ ᴛɪᴛᴜʟᴏ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴍᴜꜱɪᴄᴀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.* \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: play mp4 SUICIDAL-IDOL - ecstacy`, m)
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
'fileName': `ʏᴏᴜᴛᴜʙᴇ ᴘʟᴀʏ 📥`,
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\\nnᴀᴄᴀ ᴛɪᴇɴᴇꜱ ᴛᴜ ᴠɪᴅᴇᴏ 🐶 `, m)
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n\nᴀᴄᴀ ᴛɪᴇɴᴇꜱ ᴛᴜ ᴠɪᴅᴇᴏ 🐶 `, m)
       } catch (error) {
        await conn.reply(m.chat,`*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*`, m)
        console.error(error)
    }}}
    
    if (feature == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴇʟ ᴛɪᴛᴜʟᴏ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴍᴜꜱɪᴄᴀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.* \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: play mp3doc SUICIDAL-IDOL - ecstacy`, m)
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
'fileName': `ʏᴏᴜᴛᴜʙᴇ ᴘʟᴀʏ 📥`,
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
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
        await conn.reply(m.chat,`*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ*`, m)
        console.error(error)
    }}}
    
    if (feature == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴇʟ ᴛɪᴛᴜʟᴏ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴍᴜꜱɪᴄᴀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ.* \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: play mp4doc SUICIDAL-IDOL - ecstacy`, m)
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
'fileName': `ʏᴏᴜᴛᴜʙᴇ ᴘʟᴀʏ 📥`,
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\nᴀᴄᴀ ᴛɪᴇɴᴇꜱ ᴛᴜ ᴠɪᴅᴇᴏ 🐶 `, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴘᴇꜱᴀ ᴍᴀꜱ ᴅᴇ ${limit} ᴍʙ, ꜱᴇ ᴄᴀɴᴄᴇʟᴏ ʟᴀ ᴅᴇꜱᴄᴀʀɢᴀ.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\nᴀᴄᴀ ᴛɪᴇɴᴇꜱ ᴛᴜ ᴠɪᴅᴇᴏ 🐶 `, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
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
        await conn.reply(m.chat,`*[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ*`, m)
        console.error(error)
}}}}}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play']
export default handler
