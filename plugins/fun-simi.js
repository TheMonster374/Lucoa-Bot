const fetch = require('node-fetch');
const handler = async (m, {text, command, args, usedPrefix}) => {
if (!text) throw `𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝙃𝘼𝘽𝙇𝘼𝙍 𝘾𝙊𝙉𝙈𝙄𝙂𝙊\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hola Bot*\n\n𝙒𝙍𝙄𝙏𝙀 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝙏𝘼𝙇𝙆 𝙏𝙊 𝙈𝙀\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hello Bot*`
try {
await m.chat.sendPresenceUpdate('composing')
const api = await fetch('https://api.simsimi.net/v2/?text=' + encodeURIComponent(text) + '&lc=es');
const resSimi = await api.json();
m.reply(resSimi.success.toString());
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.sender.pushname || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + encodeURIComponent(nama) + '&msg=' + encodeURIComponent(resu[0][0][0]));
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0].toString());
} catch (e) {
 }} catch {
    throw '_*Ha habido un error*';    
}}}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['Test', 'test', ''] 
