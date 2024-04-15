// Código elaborado por: Monster 🗿🚬

import fetch from 'node-fetch'
import fs from 'fs'
let commandAddData = []

let handler = async (m, { command, usedPrefix, conn, text }) => {
//mensaje de ayuda
  const helpMessage = `
> *Solicitar - Solicitar un comando*

_Este comando te permite enviar una solicitud sobre alguna idea para un comando a mi propietario, luego analizará si tu solicitud es válida o no._

*Uso:*
\`${usedPrefix + command}\` nombre del comando + función/info

*Parámetros:*
\`name\` » Nombre del comando (sin espacios).\n
\`info\` » Realiza una breve descripción del comando y su función.\n

*Ejemplo:*
\`${usedPrefix + command}\` solicitar + enviar al propietario una idea sobre algun comando 
`.trim()
if (!text) return conn.reply(m.chat, helpMessage, m)

try {
const [name, info] = text.split('+').map((item) => item.trim())
if ( !name || !info) {
return conn.reply(m.chat, '> *Faltan parámetros.* Asegúrate de proporcionar todos los datos requeridos.', m)
}


const formattedName = name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
const formattedInfo = info.replace(/"/g, "'")

//contenido del mensaje 
commandAddData.push({
commandName: formattedName,
info: formattedInfo,
})

const reply = await conn.reply(m.chat, '> *¡Comando enviado exitosamente!*\n\nResponde a este mensaje con "enviar" o "👍" sólo si deseas enviar los comandos a mis creadores para que lo agreguen en *Inabakumori-Bot*.', m)
//envio al owner
handler.before = async function (m, { conn }) {
if (m.quoted && m.quoted.id === reply.id && ['enviar', '👍'].includes(m.text.toLowerCase())) {
const databaseCommandAdd = Buffer.from(JSON.stringify(commandAddData, null, 2), 'utf-8')
const jsonString = JSON.stringify(commandAddData, null, 2)
await conn.reply('5493804170925@s.whatsapp.net', `*Solicitud de @${m.sender.split("@")[0]} Para agregar comandos en Inabakumori-Bot*`, null, { mentions: [m.sender] })
await conn.sendMessage('5493804170925@s.whatsapp.net', { document: databaseCommandAdd, mimetype: 'application/json', fileName: `commandAdd_${m.sender}.json` }, { quoted: m })
await conn.reply('5493804170925@s.whatsapp.net', `${jsonString}`, m)
await conn.reply(m.chat, `¡Archivo enviado a mis creadores! Sigue usando Inabakumori-Bot`, m)
}}  
} catch (error) {
console.error('Error al procesar la solicitud: ', error)
conn.reply(m.chat, '¡Ocurrió un error al procesar la solicitud!', m)
}}

handler.command = /^(solicitar)$/i
handler.tags = ['main']
handler.help = ['solicitar']
handler.exp = 50;
handler.fail = null;
export default handler
