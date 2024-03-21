import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{ 
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//user.registered = false

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)

let str = `
*_ミ🤍 Hola ${taguser} 🤍彡_*

*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

° ඬ⃟🔊  _Noche de paz_
° ඬ⃟🔊  _Buenos dias_
° ඬ⃟🔊  _Audio hentai_
° ඬ⃟🔊  _Fiesta del admin_
° ඬ⃟🔊  _Fiesta del admin 2_
° ඬ⃟🔊  _Fiesta del administrador_ 
° ඬ⃟🔊  _Viernes_
° ඬ⃟🔊  _Mierda de Bot_
° ඬ⃟🔊  _Me olvidé_
° ඬ⃟🔊  _Baneado_
° ඬ⃟🔊  _Feliz navidad_
° ඬ⃟🔊  _A nadie le importa_
° ඬ⃟🔊  _Sexo_
° ඬ⃟🔊  _Vete a la vrg_
° ඬ⃟🔊  _Ara ara_
° ඬ⃟🔊  _Hola_
° ඬ⃟🔊  _Un pato_
° ඬ⃟🔊  _Nyanpasu_
° ඬ⃟🔊  _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊  _Te diagnostico con gay_
° ඬ⃟🔊  _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊  _Bañate_
° ඬ⃟🔊  _Vivan los novios_
° ඬ⃟🔊  _Marica quien_
° ඬ⃟🔊  _Es puto_
° ඬ⃟🔊  _La biblia_
° ඬ⃟🔊  _Onichan_
° ඬ⃟🔊  _Bot puto_
° ඬ⃟🔊  _Feliz cumpleaños_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Homero chino_
° ඬ⃟🔊  _Oh me vengo_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
° ඬ⃟🔊 _Hey_
° ඬ⃟🔊 _Enojado_
° ඬ⃟🔊 _Enojada_
° ඬ⃟🔊 _Chao_
° ඬ⃟🔊 _Hentai_
° ඬ⃟🔊 _Triste_
° ඬ⃟🔊 _Estoy triste_
° ඬ⃟🔊 _Me pican los cocos_
° ඬ⃟🔊 _Contexto_
° ඬ⃟🔊 _Me voy_
° ඬ⃟🔊 _Tengo los calzones del admin_
° ඬ⃟🔊 _Entrada épica_ 
° ඬ⃟🔊 _Esto va ser épico papus_
° ඬ⃟🔊 _Ingresa épicamente_
° ඬ⃟🔊 _Bv_
° ඬ⃟🔊 _Yoshi_
° ඬ⃟🔊 _No digas eso papu_
° ඬ⃟🔊 _Ma ma masivo_
° ඬ⃟🔊 _Masivo_
° ඬ⃟🔊 _Basado_
° ඬ⃟🔊 _Basada_
° ඬ⃟🔊 _Fino señores_
° ඬ⃟🔊 _Verdad que te engañe_
° ඬ⃟🔊 _Sus_
° ඬ⃟🔊 _Ohayo_
° ඬ⃟🔊 _La voz de hombre_
° ඬ⃟🔊 _Pero esto_
° ඬ⃟🔊 _Bien pensado Woody_
° ඬ⃟🔊 _Jesucristo_
° ඬ⃟🔊 _Wtf_
° ඬ⃟🔊 _Una pregunta_
° ඬ⃟🔊 _Que sucede_
° ඬ⃟🔊 _Hablame_
° ඬ⃟🔊 _Pikachu_
° ඬ⃟🔊 _Niconico_
° ඬ⃟🔊 _Yokese_
° ඬ⃟🔊 _Omaiga_
° ඬ⃟🔊 _Nadie te preguntó_
° ඬ⃟🔊 _Bueno si_
° ඬ⃟🔊 _Usted está detenido_
° ඬ⃟🔊 _No me hables_
° ඬ⃟🔊 _No chu_
° ඬ⃟🔊 _El pepe_
° ඬ⃟🔊 _Pokémon_
° ඬ⃟🔊 _No me hagas usar esto_
° ඬ⃟🔊 _Esto va para ti_
° ඬ⃟🔊 _Abduzcan_
° ඬ⃟🔊 _Joder_
° ඬ⃟🔊 _Hablar primos_
° ඬ⃟🔊 _Mmm_
° ඬ⃟🔊 _Orale_
° ඬ⃟🔊 _Me anda buscando anonymous_
° ඬ⃟🔊 _Blackpink in your area_
° ඬ⃟🔊 _Cambiate a Movistar_
° ඬ⃟🔊 _Momento equisde | Momento XD_
° ඬ⃟🔊 _Todo bien | 😇_
° ඬ⃟🔊 _Te gusta el Pepino | 🥒_
° ඬ⃟🔊 _El tóxico_
° ඬ⃟🔊 _Moshi moshi_
° ඬ⃟🔊 _Calla Fan de BTS_
° ඬ⃟🔊 _Que tal grupo_
° ඬ⃟🔊 _Muchachos_
° ඬ⃟🔊 _Está Zzzz | 😴_
° ඬ⃟🔊 _Goku Pervertido_
° ඬ⃟🔊 _Potaxio | 🥑_
° ඬ⃟🔊 _Nico nico_
° ඬ⃟🔊 _El rap de Fernanfloo_
° ඬ⃟🔊 _Tal vez_
° ඬ⃟🔊 _Corte corte_
° ඬ⃟🔊 _Buenas noches_
° ඬ⃟🔊 _Porque ta tite_
° ඬ⃟🔊 _Eres Fuerte_
° ඬ⃟🔊 _Bueno Master | 🫂_
° ඬ⃟🔊 _No Rompas más | 💔_
° ඬ⃟🔊 _Traiganle una falda_
° ඬ⃟🔊 _Se están riendo de mí_
° ඬ⃟🔊 _Su nivel de pendejo_
° ඬ⃟🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
° ඬ⃟🔊 _Elmo sabe donde vives_
° ඬ⃟🔊 _tunometecabrasaramambiche_
° ඬ⃟🔊 _Y este quien es_
° ඬ⃟🔊 _Motivación_
° ඬ⃟🔊 _En caso de una investigación_
° ඬ⃟🔊 _Buen día grupo | 🙌_
° ඬ⃟🔊 _mi bebito fiu fiu_
° ඬ⃟🔊 _sabosito_
° ඬ⃟🔊 _Freefire_
° ඬ⃟🔊 _Aguanta_
° ඬ⃟🔊 _Es viernes_
° ඬ⃟🔊 _Que quede vos_
° ඬ⃟🔊 _Feriado_
° ඬ⃟🔊 _Me emociono | borracho_
° ඬ⃟🔊 _Delivery_
° ඬ⃟🔊 _Tarado | putos_
° ඬ⃟🔊 _Bardo_
° ඬ⃟🔊 _Saliste del grupo_
° ඬ⃟🔊 _No agregué_
° ඬ⃟🔊 _Quiere tener internet gratis_
° ඬ⃟🔊 _Donde esta?_
° ඬ⃟🔊 _Q onda | 🤪_
° ඬ⃟🔊 _La tóxica_
° ඬ⃟🔊 _Bebesita_
° ඬ⃟🔊 _Tka_
° ඬ⃟🔊 _No la pienso_
° ඬ⃟🔊 _Taka Taka_
° ඬ⃟🔊 _Bot canta_
° ඬ⃟🔊  _Loli conmigo | Loli venir_
° ඬ⃟🔊  _Grap | trap_
° ඬ⃟🔊  _Bruno_
° ඬ⃟🔊 _Soy guapo_
° ඬ⃟🔊 _Dragon ball_
° ඬ⃟🔊 _Las reglas del grupo_
° ඬ⃟🔊 Pequeña canciones 
° ඬ⃟🔊 Quevedo 
° ඬ⃟🔊 Quédate 
° ඬ⃟🔊 Fernet 
° ඬ⃟🔊 Emilia 
° ඬ⃟🔊 cuantros veintes
° ඬ⃟🔊 Turrito
° ඬ⃟🔊 Allá 
° ඬ⃟🔊 cumbia 420
° ඬ⃟🔊 lgante
° ඬ⃟🔊 esaa |😎
° ඬ⃟🔊 bar 
° ඬ⃟🔊 Le mando fui  
𝑺𝒆 𝒗𝒂𝒏 𝒂𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒎𝒂𝒔 𝒂𝒖𝒅𝒊𝒐 𝒅𝒆 𝒑𝒐𝒄𝒐,
𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍𝒈𝒖𝒏 𝒂𝒖𝒅𝒊𝒐 𝒏𝒖𝒆𝒗𝒐,
𝒐 𝒄𝒐𝒔𝒂 𝒏𝒖𝒆𝒗𝒂 𝒉𝒂𝒃𝒍𝒂 𝒄𝒐𝒏 𝒂𝒅𝒎𝒊𝒏 𝒐𝒇𝒄 𝒅𝒆𝒍 𝒃𝒐𝒕

*_INABAKUMORI-BOT_*`.trim()
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})

} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['menuaudios']
handler.tags = ['grupo', 'owner']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
