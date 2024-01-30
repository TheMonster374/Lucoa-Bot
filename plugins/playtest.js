require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const {youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage} = require('../libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('../libs/youtube') 
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
if (command == 'play') 
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
try { 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text2}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n\n${lenguaje.descargar.music}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg' }, { quoted: m})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch (e) {
return m.reply(info.error) 
console.log(e)}}}}

handler.command = /^(playtest|play2)$/i;
export default handler;

