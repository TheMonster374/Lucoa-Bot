import e from"node-fetch";import*as a from"fs";

let handler=async($,{conn:t,command:r})=>{
  let i=$.mentionedJid&&$.mentionedJid[0]?$.mentionedJid[0]:$.fromMe?t.user.jid:$.sender,n=await t.getName($.sender),o=
    ["737000000000000","69000000000","707000000000000000"],s=$.reply(MultiNK.Proces(n));await s;try{let d=await (await e("https://latam-api.vercel.app/api/"+r+"?apikey="+MyApiKey)).json();t.sendMessage($.chat,{image:{url:d.imagen},caption:`*🖼️ Imagen:* ${r}
*👤 Solicitada por:* @${i.replace(/@.+/,"")}`,fileLength:o[Math.floor(Math.random()*o.length)],mentions:[$.sender]},{ephemeralExpiration:86400,quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51957041866-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:a.readFileSync("imagen1"),surface:200,message:`${n} [ 🔰 ] ${r}`,orderTitle:"NeKoTinaBot-MD",sellerJid:"0@s.whatsapp.net"}}}})}catch(m){$.reply(error)}}};handler.help=["waifu_hd","rostro_4k"],handler.tags=["animeuwu"],handler.command=/^(waifu_hd|rostro_4k)$/i;export default handler;
