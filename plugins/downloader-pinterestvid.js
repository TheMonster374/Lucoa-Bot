import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { lookup } from 'mime-types'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw 'Input Pinterest Url'
	let res = await pinterest(text)
	let mime = await lookup(res)
	await conn.sendMessage(m.chat, 'aqui tienes tu video', m);

handler.help = ['pinterest']
handler.tags = ['downloader']
handler.command = /^(vpinterest|vidpin|pintvid)$/i

export default handler
