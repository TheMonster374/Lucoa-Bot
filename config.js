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
  ['18192011470', '👑   Creador 👑', true],
  ['18199751245', '  Collaborator 1 💫', true],
  ['18192011470', '  - Collaborator 2 ', true],
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
//━━━━━━━STICKERS━━━━━━━━━━━━ 
global.packname = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.author = '𝘽𝙮 𝘼𝙇𝙎';
//━━━━━━━━━━━━━━━━━━━━━━ 

global.wm = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.titulowm = 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ';
global.titulowm2 = `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ`
global.igfg = 'Jotchua-Bot By';
global.wait = '*Cargando...*';
//━━━━━━━IMAGENES━━━━━━━━━━━━ 
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
//━━━━━━IMAGENES 2━━━━━━━━━━ 

global.imgmenu = fs.readFileSync('./Menu3.png') 
global.ytlogo = fs.readFileSync('./Menu3.png') 
global.miniurl = fs.readFileSync('./Menu.png') 
global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.thumbnail = fs.readFileSync('./Menu.png')

//━━━━━━━━━━━━━━━
global.desc = 'Simple WhatsApp Bot Multi Device'

//━━━━━━━MARCA━━━━━━━━ 
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Jotchua-Bot', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${wm}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${packname}\n      ${wm}`, 'jpegThumbnail': catalogo }}}

//━━━━━━━━━━━━━━━━━━━━━━ 

global.addescargas = `JOTCHUA-BOT BY ALS`
global.adimagen = `JOTCHUA-BOT BY ALS` 

//━━━━━━━━━━━━━━━━━━━━━━ 

global.mods = [];

//Reacciones
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

global.nn = 'https://chat.whatsapp.com/LpZl6HC1iD3KfoYfDkyjbJ' //Grupo ofc
//━━━━━━━━━━━━━━━━━━━━━━ 
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
