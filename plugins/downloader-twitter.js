import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
import qs from 'qs'
const handler = async (m, {conn, text, args, usedPrefix, command}) => {

const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i
if (!text) return conn.reply(m.chat,`*_ingresa un enlace de twitter_*\n\n*ejemplo:* ${usedPrefix + command}  https://twitter.com/Animalesybichos/status/1564616107159330816\n`, m)
try{ 
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=GataDios&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `*Titulo:* ${tweetTitleWithoutUrl}\n\n🔗 *link acortado:*\n• ${shortUrl1}`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, m)
} catch (e) {
console.log(e)
}}

handler.help = ["x (twitter)"]
handler.tags = ["downloader"]
handler.command = /^(twitter|x)$/i
export default handler
