import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';
import MessageType from '@whiskeysockets/baileys';

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://tobz-api.herokuapp.com/api/cry?apikey=Tobzzz17')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Cry', '@SHIRAORI')
 conn.sendFile(m.chat, stiker, null, null, m, false, {asSticker: true});

 } catch (e) {
  }
}
handler.command = /^test3/i

export default handler
