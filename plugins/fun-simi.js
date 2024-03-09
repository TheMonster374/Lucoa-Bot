/*import axios from 'axios'

let handler = async (m, { text, command, usedPrefix, args }) => {
if (!text) throw '*Formato incorrecto*\n*Ejemplo:*\n .bot Hola bot'
try {
let url = 'https://simsimi.fun/api/v2/?mode=talk&lang=es&message=${text}&filter=1'
let res = await axios.get(url)
let data = res.data
let simi = data.success ? data.success : data.error
if (simi) {
m.reply(simi)
} else {
m.reply('x')
}} catch (error) {
//console.error(error)
}}
handler.help = ['simi', 'bot'].map((v) => v + ' <texto>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa)$/i;
export default handler


import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

let handler = async (m, { text, command, usedPrefix, args }) => {
  if (!text) throw '[📚] 𝐸𝑛𝑣𝑖𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑝𝑎𝑟𝑎 ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*  *.bot* Hola bot';

  try {
    let api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    let resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      let reis = await fetch(
        'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text
      );
      let resu = await reis.json();
      let nama = m.pushName || '1';
      let api = await fetch(
        'http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]
      );
      let res = await api.json();
      let reis2 = await fetch(
        'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt
      );
      let resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      try {
        let reisss = await fetch(
          'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=' + text
        );
        let resuuu = await reisss.json();
        let res222 = await fetch(
          'https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}'
        );
        let json222 = await res222.json();
        let resulttt = json222.result;
        let isValidJson = true;
        try {
          JSON.parse(resulttt);
        } catch (e) {
          isValidJson = false;
        }
        if (isValidJson) {
          let lolll = await translate('${resulttt}', { to: 'es', autoCorrect: true });
          m.reply(lolll.text);
        } else {
          m.reply('*Pero que dices gilipollas :v*');
        }
      } catch (error) {
        
      }
    }
  }
};

handler.help = ['bot'].map((v) => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^((sim)?simi|bot|alexa)$/i;

export default handler
*/
import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, usedPrefix, args }) => {
  if (!text) throw '*Formato incorrecto*\n*Ejemplo:\n${usedPrefix + command} Hola bot*'
  try {
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es")
  let resSimi = await api.json()
  m.reply(resSimi.success)      
  } catch {
  try {
  if (text.includes('Hola')) text = text.replace('Hola', 'Hello')
  if (text.includes('hola')) text = text.replace('hola', 'Hello')
  if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO')    
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
  let resu = await reis.json()  
  let nama = m.pushName || '1'
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
  let res = await api.json()
  let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
  let resu2 = await reis2.json()
  m.reply(resu2[0][0][0])      
  } catch {  
  let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
  let resuuu = await reisss.json()      
  let res222 = await fetch('https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}')  
  let json222 = await res222.json()
  let resulttt = json222.result
  let lolll = await translate(${resulttt}, { to: 'es', autoCorrect: true })
  m.reply(lolll.text)      
  }}
}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa)$/i
export default handler
