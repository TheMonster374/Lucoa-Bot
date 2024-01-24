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
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
    
if (command == 'tiktok' || command == 'tt') {
if (!text) return m.reply(`usa el comando\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `espera en lo que envio tu video`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(args).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch {
m.reply(info.error)}}
