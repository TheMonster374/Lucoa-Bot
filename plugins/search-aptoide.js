import { search, download } from 'aptoide-scraper'
import ufs from 'url-file-size'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
   std: 'JEDEC',
   decimalPlaces: 2,
   keepTrailingZeroes: false,
   render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "search",
        "dl"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return m.reply(`Formato incorrecto\n\nEste comando se usa de la siguiente manera :\n\nPara *Buscar* el ID de la aplicación :\n*${usedPrefix + command} search* WhatsApp\n\nPara *Descargar* la aplicación :\n*${usedPrefix + command} dl* com.whatsapp`)
    
    if (lister.includes(feature)) {
        if (feature == "search") {
            if (!inputs) return m.reply(`Formato incorrecto\n\nEjemplo: *${usedPrefix + command} search* WhatsApp`)
            try {
                let results = await search(text)
                let url = Object.values(results).map(v => v)
                let txt = ``
                for (let i = 0; i < (15 <= url.length ? 15 : url.length); i++) {
                txt += `*Resultado* : ${1+i}\n`
                txt += `*Nombre* : ${url[i].name}\n`
                txt += `*ID* : ${url[i].id}\n\n`
                }
                let img = 'https://tinyurl.com/yo6t7fe2'
                await conn.sendFile(m.chat, img, "jotchua.jpg", txt, m)
            } catch (e) {
                await conn.reply(m.chat, '*☓ Ocurrió un error inesperado*', m, adReply).then(_ => m.react('✖️'))
            }
        }
        
        if (feature == "dl") {
            if (!inputs) return m.reply(`Formato incorrecto\n\nEjemplo: *${usedPrefix + command} dl* com.whatsapp`)
            try {
                let res = await download(inputs)
                let size = await format(await ufs(res.dllink))
                let limit = 300
                let txt = `*Nombre* : ${res.name}\n`
                txt += `*Package* : ${res.package}\n`
                txt += `*Tamaño* : ${size}\n`
                txt += `*Subido* : ${res.lastup}`
                if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply).then(_ => m.react('✖️'))
                await conn.sendFile(m.chat, res.icon, "ai.jpg", txt, m)
                await conn.sendMessage(m.chat, { document: { url: `${res.dllink}` }, mimetype: 'application/videos.android.package-archive', fileName: `${res.name}.apk` }, { quoted: m })
            } catch (e) {
                await conn.reply(m.chat, '*☓ Ocurrió un error inesperado*', m, adReply).then(_ => m.react('✖️'))
            }
        }
    }
}
handler.command = ['apk', 'adpk2', 'dlapk', 'apkdl', 'modapk', 'aptoide']
handler.tags = ['downloader']
handler.help = ['aptoide search <nombre>', 'aptoide dl <ID>']
export default handler
