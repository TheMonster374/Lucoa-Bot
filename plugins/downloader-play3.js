/* Creditos a StarlightsTeam */

import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"]
    let ytmsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":'Downloader YouTube', "title": 'Ai Hoshino - MD', 'jpegThumbnail': ytlogo}}}
    
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m)
    if (lister.includes(feature)) {
        if (feature == "mp3" || feature == "yta" || feature == "audio") {
            if (!inputs) return conn.reply(m.chat, `*ingresa el titulo de un video o musica de youtube*`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
    let txt = ``
       txt += `📑 *Título ∙* ${vid.title}\n\n`
       txt += `🕜 *Duración ∙* ${vid.timestamp}\n\n`
       txt += `👁 *Visitas ∙* ${vid.views}\n\n`
       txt += `📚 *Autor ∙* ${vid.author.name}\n\n`
       txt += `📅 *Publicado ∙* ${vid.ago}\n\n`
       txt += `⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += ``
let buttonMessage= {
'document': { url: `https://github.com/TheMonster374` },
'mimetype': `application/pdf`,
'fileName': `Youtube play mp3`,
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
conn.sendMessage(m.chat, buttonMessage, { quoted: ytmsg })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
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
        await conn.reply(m.chat,`[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜`, m, adReply)
        console.error(error)
    }}}
        
        if (feature == "mp4" || feature == "ytv" || feature == "video" || feature == "video") {
            if (!inputs) return conn.reply(m.chat, `*ingresa el titulo de un video o musica de youtube*`, m, adReply)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = ``
       txt += `📑 *Título ∙* ${vid.title}\n\n`
       txt += `🕜 *Duración ∙* ${vid.timestamp}\n\n`
       txt += `👁 *Visitas ∙* ${vid.views}\n\n`
       txt += `📚 *Autor ∙* ${vid.author.name}\n\n`
       txt += `📅 *Publicado ∙* ${vid.ago}\n\n`
       txt += `⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += ``
let buttonMessage= {
'document': { url: `https://github.com/TheMonster374` },
'mimetype': `application/pdf`,
'fileName': `Youtube Play mp4`,
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
conn.sendMessage(m.chat, buttonMessage, { quoted: ytmsg })
       
       let ytestilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${vid.title}`, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, ytestilo)
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, ytestilo)
       } catch (error) {
        await conn.reply(m.chat,`[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜`, m, adReply)
        console.error(error)
    }}}
    
    if (feature == "mp3doc" || feature == "ytadoc" || feature == "audiodoc") {
            if (!inputs) return conn.reply(m.chat, `*ingresa el titulo de un video o musica de youtube*`, m, adReply)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	let txt = ``
       txt += `📑 *Título ∙* ${vid.title}\n\n`
       txt += `🕜 *Duración ∙* ${vid.timestamp}\n\n`
       txt += `👁 *Visitas ∙* ${vid.views}\n\n`
       txt += `📚 *Autor ∙* ${vid.author.name}\n\n`
       txt += `📅 *Publicado ∙* ${vid.ago}\n\n`
       txt += `⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += ``
let buttonMessage= {
'document': { url: `https://github.com/TheMonster374` },
'mimetype': `application/pdf`,
'fileName': `Youtube Play mp3doc`,
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
conn.sendMessage(m.chat, buttonMessage, { quoted: ytmsg })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply).then(_ => m.react('✖️'))
       
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
        await conn.reply(m.chat,`[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜`, m, adReply)
        console.error(error)
    }}}
    
    if (feature == "mp4doc" || feature == "ytvdoc" || feature == "videodoc" || feature == "videodoc") {
            if (!inputs) return conn.reply(m.chat, `*ingresa el titulo de un video o musica de youtube*`, m, adReply)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = ``
       txt += `📑 *Título ∙* ${vid.title}\n\n`
       txt += `🕜 *Duración ∙* ${vid.timestamp}\n\n`
       txt += `👁 *Visitas ∙* ${vid.views}\n\n`
       txt += `📚 *Autor ∙* ${vid.author.name}\n\n`
       txt += `📅 *Publicado ∙* ${vid.ago}\n\n`
       txt += `⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += ``
let buttonMessage= {
'document': { url: `https://github.com/TheMonster374` },
'mimetype': `application/pdf`,
'fileName': `Youtube Play mp4doc`,
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
conn.sendMessage(m.chat, buttonMessage, { quoted: ytmsg })
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
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
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
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
        await conn.reply(m.chat,`[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜`, m, adReply)
        console.error(error)
}}}}}
handler.help = ["play3"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play3']

export default handler
