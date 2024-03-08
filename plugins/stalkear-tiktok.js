import fs from ("fs")
import path from ("path")
import chalk from ("chalk");
import axios from ('axios')
import fetch from ('node-fetch')
import cheerio from ('cheerio')
import fg from ('api-dylux') 


const handler = async (m, {conn, text, usedPrefix, args, command}) => {
if (!args[0]) return m.reply(`*Ingrese el nombre del usuario*\n\n*Ejemplo:* ${prefix + command} EmiliaMermes`)
try {  	
let res = await fg.ttStalk(args[0])
let txt = `┏━━≪ *TIKTOK STALK* ≫━•
┃🔖 *Nombre* ${res.name}
┃🔖 nombre de usuario ${res.username}
┃👥 seguidores ${res.followers}
┃🫂 siguiendo ${res.following}
┃📌 biografia ${res.desc}
┃━━━━━━━━━━━━━━
┃ *🔗 Link* : https://tiktok.com/${res.username}
┗━━━━━━━━━━━━━•`
await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch (e) {
m.reply(info.error)
console.log(e)}}

handler.command = /^(tiktokstalk)$/i;
export default handler;
