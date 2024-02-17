import { es } from '../lib/idiomas/_default.js' 

export async function before(m,{ conn }) {
let idioma  = global.db.data.users[m.sender].Language
let JT
  
if (idioma == "es") {
JT = es
}  {
JT = mid || es
}
global.mid = JT

}
