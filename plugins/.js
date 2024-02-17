import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw '*𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒅𝒆 𝒍𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔* \n\n[🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: TEST mono en el espacio'
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
           	client.sendReact(m.chat, '🕒', m.key)
               let img = await client.downloadMediaMessage(q)
               let image = await Scraper.uploadImageV2(img)
               const json = await Api.neoxr('/gemini-vision', {
                  image: image.data.url,
                  lang: 'id'
               })
               if (!json.status) return m.reply(Func.jsonFormat(json))
               client.sendFile(m.chat, json.data.image, '', json.data.description, m)
            } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
            client.sendReact(m.chat, '🕒', m.key)
            let img = await q.download()
            let image = await Scraper.uploadImageV2(img)
            const json = await Api.neoxr('/gemini-vision', {
               image: image.data.url,
               lang: 'id'
            })
            if (!json.status) return m.reply(Func.jsonFormat(json))
            client.sendFile(m.chat, json.data.image, '', json.data.description, m)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
handler.command = /^TEST$/i

export default handler
