import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝙽 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝚃𝙴𝚁𝙽𝙰𝙲𝙸𝙾𝙽𝙰𝙻, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: +𝟷 (𝟺𝟻0) 555-555'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "suspendido " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes("payload":true)) {
m.reply('##- WhatsApp Support -##/n/nHola/nGracias por tu mensaje./nNuestro sistema marcó la actividad de tu cuenta como un incumplimiento de nuestras Condiciones del servicio y, por ese motivo, suspendió tu número de teléfono. Valoramos tu participación en nuestra plataforma y lamentamos cualquier confusión o inconveniente que esto haya podido ocasionar./nSi estás usando un número de teléfono nuevo, es posible que la persona a la que pertenecía antes el número haya incumplido nuestras Condiciones del servicio y, por ese motivo, se haya suspendido la cuenta. No te preocupes, no se te penalizará por los incumplimientos de propietarios anteriores del número de teléfono./nLuego de revisar la actividad de tu cuenta, cancelamos la suspensión. Ya deberías tener acceso a WhatsApp./nComo próximo paso, te recomendamos que vuelvas a registrar tu número de teléfono en WhatsApp para asegurarte de que tengas acceso./nPuedes visitar nuestro sitio web para descargar WhatsApp o la aplicación WhatsApp Business. Nota: No brindamos soporte para aplicaciones, dispositivos o versiones de WhatsApp que no sean compatibles, ni para dispositivos liberados o con acceso')
} else if (payload.includes("payload":true)) {
m.reply('##- WhatsApp Support -##/nHola,/nNuestro sistema marcó la actividad de tu cuenta como un incumplimiento de nuestras Condiciones del servicio y suspendió tu número de teléfono. Como resultado de este incumplimiento, tu cuenta permanecerá suspendida./nTe recomendamos que leas detenidamente la sección "Uso aceptable de nuestros servicios" de nuestras Condiciones del servicio para obtener más información sobre los usos apropiados de WhatsApp y las actividades que incumplen nuestras Condiciones del servicio. Para obtener más información sobre cómo usar WhatsApp de manera responsable, visita el Centro de ayuda y consulta este artículo./nPor favor, recuerda que WhatsApp se reserva el derecho de hacer cumplir sus políticas de conformidad con sus Condiciones del servicio.')
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command = /^(waza|swa|soporte|support)$/i
handler.rowner = true 
export default handler
