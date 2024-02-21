//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@whiskeysockets/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix, isAdmin }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]
let username = conn.getName(who)
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

if (chat.chatbot) {
//▪AQUÍ AGREGA LOS COMANDOS▪
let sticker1A = /Xd|xd|xD|XD/i
let sticker1B = sticker1A.exec(m.text)


//▪AQUI AGREGA LOS DIRECTORIOS DEL STICKER A MANDAR▪
if (sticker1B) {
	let vn = './src/welgc.webp'
	conn.sendFile(m.chat, vn, 'welgc.webp', null, m, true, { type: 'webpMessage', ptt: true, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `${wm}`, body: `h`, mediaType: 2, sourceUrl: `null`, thumbnailUrl: md}}}, { quoted: m })
	} else
}
return !0
}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
