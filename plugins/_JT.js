import { es } from '../lib/idiomas/_default.js' 

export async function before(m,{ conn }) {
let idioma  = global.db.data.users[m.sender].JTLanguage
let JT
  
if (idioma == "es") {
JT = es
}  {
JT = JT || es
}
global.JT = JT

}
