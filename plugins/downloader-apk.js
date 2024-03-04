import { search, download } from 'aptoide-scraper'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `[📚] 𝑝𝑜𝑛 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑙𝑎 𝑎𝑝𝑝 𝑞𝑢𝑒 𝑞𝑢𝑖𝑒𝑟𝑒𝑠 𝑏𝑢𝑠𝑐𝑎𝑟\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*\n${usedPrefix + command} Pokemon Go`
try {
const searchResult = await search(text)
const data = await download(searchResult[0].id)
if (data.size.includes('GB') || parseFloat(data.size.replace(' MB', '')) > 300) {
return await conn.sendMessage(m.chat, { text: '𝐸𝑙 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑒𝑠 𝑑𝑒𝑚𝑎𝑠𝑖𝑎𝑑𝑜 𝑝𝑒𝑠𝑎𝑑𝑜 𝑝𝑜𝑟 𝑙𝑜 𝑞𝑢𝑒 𝑛𝑜 𝑠𝑒 𝑒𝑛𝑣𝑖𝑎𝑟á.' }, { quoted: m })
}
await conn.sendMessage(m.chat, { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null }, { quoted: m })
} catch {
}}
handler.help = ['apk'];
handler.tags = ['downloader'];
handler.command = /^(apkmod|modapk|dapk2|aptoide|apk)$/i
export default handler
