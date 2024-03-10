import fetch from "node-fetch";

const handler = async (m, { conn, args, usedPrefix, command }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_🚩 In progress, please wait..._')
	let res = await fetch('https://mxmxk.herokuapp.com/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let v = await fetch('https://mxmxk.herokuapp.com/nhentai/' + code)
	let json2 = await v.json()
	let buffer = await (await fetch(json.result.images.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	return await client.sendMessage(m.from, { document: { url: json2.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentaipdf']
handler.tags = ['nsfw']
handler.command = /^(nhentaipdf2)$/i
export default handler;
