// Código elaborado por: Monster 🗿🚬

import fetch from 'node-fetch'
import fs from 'fs'
/*const fantasyAddPath = './fantasyAdd.json'*/
let commandAddData = []

let handler = async (m, { command, usedPrefix, conn, text }) => {
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
/*if (fs.existsSync(fantasyAddPath)) {
const data = fs.readFileSync(fantasyAddPath, 'utf8')
fantasyAddData = JSON.parse(data)
}*/
const [name, info] = text.split('+').map((item) => item.trim())
if ( !name || !info) {
return conn.reply(m.chat, '> *Faltan parámetros.* Asegúrate de proporcionar todos los datos requeridos.', m)
}


const formattedName = name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
const formattedInfo = info.replace(/"/g, "'")

//if (formattedClass.split(' ').length > 1) {
//return conn.reply(m.chat, '¡Solo puedes ingresar una clase a la vez!', m)
//}

//const formattedType = typeInput.split(/[:;/]/).map((item) => item.trim().toLowerCase()).map((item) => item.replace(/^\w/, (c) => c.toUpperCase())).join(', ')
/*
let price
switch (formattedClass) {
case 'Común':
price = Math.floor(Math.random() * (200 - 100 + 1) + 100)
break
case 'Poco Común':
price = Math.floor(Math.random() * (500 - 300 + 1) + 300)
break
case 'Raro':
price = Math.floor(Math.random() * (700 - 600 + 1) + 600)
break
case 'Épico':
price = Math.floor(Math.random() * (1500 - 800 + 1) + 800)
break
case 'Legendario':
price = Math.floor(Math.random() * (3000 - 1600 + 1) + 1600)
break
case 'Sagrado':
price = Math.floor(Math.random() * (9999 - 3100 + 1) + 3100)
break
case 'Supremo':
price = Math.floor(Math.random() * (30000 - 10000 + 1) + 10000)
break
case 'Transcendental':
price = Math.floor(Math.random() * (999999 - 30000 + 1) + 30000)
break
default:
break
}*/

/*const codigoImagen = generarCodigo()*/
//for (const info of data.infoImg) {
//fantasyAddData.push({
//index: info.index,
//url: info.url,
//name: info.name,
//desp: info.desp,
//class: info.class,
//type: info.type,
//price: info.price,
//code: info.code,
//})
//}

commandAddData.push({
index: true,
name: formattedName,
info: formattedInfo,
})

//fs.writeFileSync(fantasyAddPath, JSON.stringify(fantasyAddData, null, 2), 'utf8')
const reply = await conn.reply(m.chat, '> *¡Comando enviado exitosamente!*\n\nResponde a este mensaje con "enviar" o "👍" sólo si deseas enviar los comandos a mis creadores para que lo agreguen en *Inabakumori-Bot*.', m)

handler.before = async function (m, { conn }) {
if (m.quoted && m.quoted.id === reply.id && ['enviar', '👍'].includes(m.text.toLowerCase())) {
/*const databaseFantasyAdd = Buffer.from(JSON.stringify(fantasyAddData, null, 2), 'utf-8')
const jsonString = JSON.stringify(fantasyAddData, null, 2)*/
await conn.reply('573017210155@s.whatsapp.net', `*Solicitud de @${m.sender.split("@")[0]} Para agregar comandos en Inabakumori-Bot*`, null, { mentions: [m.sender] })
/*await conn.sendMessage('573017210155@s.whatsapp.net', { document: databaseFantasyAdd, mimetype: 'application/json', fileName: `fantasyAdd_${m.sender}.json` }, { quoted: m })
await conn.reply('573017210155@s.whatsapp.net', `${jsonString}`, m)*/
await conn.reply(m.chat, `¡Archivo enviado a mis creadores! Sigue agregando más personajes que quieras que esten en Inabakumori-Bot`, m)
}}  
} catch (error) {
console.error('Error al procesar la solicitud: ', error)
conn.reply(m.chat, '¡Ocurrió un error al procesar la solicitud!', m)
}}

/*
function generarCodigo() {
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const caracteresEspeciales = '#@%_*!^<'
let codigo = ''
for (let i = 0; i < 3; i++) {
codigo += letras.charAt(Math.floor(Math.random() * letras.length))
}
for (let i = 0; i < 2; i++) {
codigo += numeros.charAt(Math.floor(Math.random() * numeros.length))
}
for (let i = 0; i < 1; i++) {
codigo += caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length))
}
codigo = codigo.split('').sort(() => Math.random() - 0.5).join('');
return codigo
}*/
handler.command = /^(solicitar)$/i
export default handler
