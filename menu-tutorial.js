let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ _𝔹𝕀𝔼ℕ𝕍𝔼ℕ𝕀𝔻𝕆_ ⊶
▢ ¡Hola! *${name}* bienvenido al grupo 
▢ Yo soy *Inabakumori*, un bot divertido de WhatsApp
└──────────────
┌───⊷ *Pero.. ¿Que es un bot? 🤖* ⊶
▢  Es un robot que responde a ciertos comandos 
▢  y tiene múltiples funciones, como *descargar música/videos de cualquier plataforma*
▢  *tiene diferentes IAs y herramientas de moderación ee grupos*
▢  *¡y muchas mas cosas divertidas!*
└──────────────
┌───⊷ *¿Como lo uso?*⊶
▢  Para usar el bot, primero te tienes que registrar 
▢  en su base de datos, tranquilo no es nada difícil,
▢  tienes que escribir el siguiente comando:
❏ *${usedPrefix}reg [TuNombre].[TuEdad]
▢
▢  ¡Y listo, ya puedes usar los diferentes comandos del bot!
└──────────────
_*Mas tutoriales (pronto)*_
❏ *${usedPrefix}tutorpg*
❏ *${usedPrefix}tutoias*
❏ *${usedPrefix}tutosubbots*
❏ *${usedPrefix}tutodescargas*
❏ *${usedPrefix}tutogrupos (solo admins)*
❏ *${usedPrefix}tutoenable (solo admins)*
❏ *${usedPrefix}tutonsfw
❏ *${usedPrefix}tutojuegos
❏ *${usedPrefix}tutofun*
❏ *${usedPrefix}tutotools*)`
}

handler.command =/^(tutorial|tuto|new|nuevo)/i 
handler.help = ['tutorial'] 
handler.tags = ['begin']  
handler.group = true
handler.fail = null
handler.register = false
export default handler 
