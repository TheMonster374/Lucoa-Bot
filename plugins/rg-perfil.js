//creditos a starlightsteam

import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import db from '../lib/database.js'
import { spawn, exec } from 'child_process'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, exp, limit, lastdaily, registered, regTime, age, level } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || '×'
  let str = ` –  *P E R F I L  -  U S E R*

┌   *Nombre* : ${username}
│   *Numero* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│   *Link:* wa.me/${who.split`@`[0]}
│   *diamantes:* ${limit}
│   *Nivel:* ${level}
│   *Exp:* ${exp}
│   *Exp nivel:* ${user.exp - min}/${xp}
│   *Ultimo claim:* ${lastdaily > 0 ? `${formatDate(lastdaily)}` : '×'}
│   *Registrado:* ${registered ? 'Si': 'No'}
└   *Edad:* ${registered ? `${age} años` : '×'}
`
conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `CANAL DE WHATSAPP`,
body: `🤍 Unete al canal OFC`,
mediaType: 1,
sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
          
}

handler.help = ['perfil', 'perfil @user']
handler.tags = ['rg']
handler.command = /^(perfil|profile)$/i

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}




/*import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/06cc652844ea19e8aed1c.jpg';
  const user = global.db.data.users[m.sender];
const {money, joincount} = global.db.data.users[m.sender];
const {exp, limit, level, role} = global.db.data.users[m.sender];
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `✧ *Nombre:* ${username} ${registered ? '(' + name + ') ': ''}
✧ *Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
✧ *diamantes*:  ${user.limit} 💎
✧ *Pesos*: ${user.exp} 🪙
✧ *​Nivel​*: ${user.level} 🔰
✧ *Numero de serie:* 
${sn}`;
conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: { forwardingScore: 9999, externalAdReply: { showAdAttribution: true, title: packname, body: desc, sourceUrl: null, mediaType: 1, thumbnail: imgPerfil }}}, { quoted: m })
  }
};
handler.help = ['perfil', 'perfil @user'];
handler.tags = ['rg'];
handler.command = /^perfil|profile?$/i;
export default handler;
*/
