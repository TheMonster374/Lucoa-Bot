import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = "" //Ejemplo: +59309090909

global.owner = [
  ['5491156673266', '👑   Creador 👑', true],
  ['', '  Collaborator 1 💫', true],
  ['', '  - Collaborator 2 ', true],
  ['', '  - Collaborator 3 ', true],
  ['', ' - Collaborator 4 ', true],
  ['', '  - Collaborator 5 ', true],
  ['', '  - Collaborator 6 ', true],
  ['', '  - Collaborator 7 ', false],
  ['', '  - Collaborator 8 ', true],
  ['','  - Tester ', true],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''], 
  [''],  
  [''],
  [''],
  ['']
];

global.suittag = [''];
global.prems = [''];

global.packname = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.author = '𝘽𝙮 𝘼𝙇𝙎';
global.wm = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.titulowm = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.titulowm2 = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ`
global.igfg = 'Jotchua-Bot By';
global.wait = '*Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑻𝑬𝑿𝑻𝑶𝑺◞ • 🥗
global.adimagen = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎` 
global.adanime = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎` 
global.adyoutube = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎` 
global.adsticker = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎` 
global.addescargas = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎`
global.adnsfw = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎`
 //▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

 

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🍁
global.ignyc = '\nᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛㅤ𝘽𝙮 𝘼𝙇𝙎\n' 
global.botname = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ'
global.me = '𝘽𝙮 𝘼𝙇𝙎'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": catalogo, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑪𝑶𝑵𝑻𝑨𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.ownerfk = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑮𝑰𝑭 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${me}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname}\n      ${me}`, 'jpegThumbnail': imgfgif }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑼𝑫𝑰𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}  
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑫𝑶𝑪𝑼𝑴𝑬𝑵𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${botname}\n   ${me}`,jpegThumbnail: catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑰𝑴𝑨𝑮𝑬𝑵 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.fakeimg = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`${me}`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `${botname}\n    ${me}`, 'jpegThumbnail': catalogo }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":`${botname}\n${me}`, "title": `${botname}`, 'jpegThumbnail': catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑶𝑪𝑨𝑳𝑰𝒁𝑨𝑪𝑰𝑶́𝑵 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.flocation = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${botname}\n   ${me}`,jpegThumbnail: catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰́𝑫𝑬𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${botname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${botname}`, 'jpegThumbnail': catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑵𝑲𝑮𝑷 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Alberto", "caption": `${botname}\n      ${me}`, 'jpegThumbnail': catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑷𝑹𝑶𝑫𝑼𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `${botname}`, "description": "NyanCatBot-MD", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑽𝑬 𝑳𝑶𝑪𝑨𝑳𝑰𝒁𝑨𝑪𝑰𝑶́𝑵◞ • 🌺
global.liveloc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":`${botname}`,"h": `${botname}`, 'jpegThumbnail': catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑷𝑹𝑶𝑫𝑼𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶 2◞ • 🌺
global.fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `${botname}`, "retailerId": "🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰𝑬𝑾𝑶𝑵𝑪𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fakevoimg = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰𝑬𝑾𝑶𝑵𝑪𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶 #2◞ • 🌺
global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: {
  extendedTextMessage: {
    text: '=> m.message',
    previewType: 0,
    contextInfo: {
      mentionedJid: [],
      groupMentions: [],
      stanzaId: '1B0791BAB5D10FE6E78F69E64F013B02',
      participant: '50499698072@s.whatsapp.net',
      expiration: 7776000,
      ephemeralSettingTimestamp: true,
      disappearingMode: true
    }}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//• ↳ ◜𝑷𝑨𝒀𝑴𝑬𝑵𝑻 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fpay = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "requestPaymentMessage": { "currencyCodeIso4217": "USD", "amount1000": "100000", "requestFrom": "50499698072@s.whatsapp.net", "noteMessage": { "extendedTextMessage": { "text": botname }}, "expiryTimestamp": "0", "amount": { "value": "100000", "offset": 1000, "currencyCode": "USD" }, "background": { "id": "BBB9307B17C17F928E57A7435E45033E", "fileLength": "94896", "width": 64, "height": 64, "mimetype": "image/webp", "placeholderArgb": 4288282521, "textArgb": 4278190080, "subtextArgb": 4288282521}}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑬𝑵𝑪𝑼𝑬𝑺𝑻𝑨 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.fpoll = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "status@broadcast" }, "message": {"pollCreationMessage": {"name": wm, "selectableOptionsCount": 1}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶◞ • 🌄
global.adgp = { contextInfo: { externalAdReply: { showAdAttribution: true, title: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', body: global.botname, sourceUrl: global.linkgc, thumbnail: miniurl }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴◞ • 🌄
global.adig = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: "https://Instagram.com/rlxfly.uw", mediaType: "VIDEO", description: "https://Instagram.com/rlxfly.uw",  title: 'Test', body: `hola`, thumbnail: miniurl, sourceUrl: 'http://s.id/0x404' }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝒀𝑶𝑼𝑻𝑼𝑩𝑬◞ • 🌄
global.adyt = { contextInfo: { externalAdReply: { showAdAttribution: true, title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: imgmenu, mediaUrl: 'https://youtu.be/FKVuVneuwtg', sourceUrl: linkgc }}} 
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nJotchua - Bot`;
global.gt = 'Jotchua - Bot';
global.mysticbot = 'Jotchua-Bot';
global.md = 'https://github.com/AleXD0009/Jotchua-Bot';
global.mysticbot = 'https://github.com/AleXD009/Jotchua-Bot';
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.waitt = '*▬▭▭▭*';
global.waittt = '*▬▬▭▭*';
global.waitttt = '*▬▬▬▬*';
global.nomorown = '5491156673266';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
