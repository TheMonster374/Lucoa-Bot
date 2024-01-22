const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola 👋🏻 ${pushname} Mi Nombre es jotchuabot Bienvenid@ a mi menu
  
╭──────────────────╮
*➼✰︙ 𝑻𝑼 𝑰𝑵𝑭𝑶* 
╰──────────────────╯
┋✧⃝👤͙ *Nombre:* 
┋✧⃝👤͙ *Numero:* ${m.sender.split('@')[0]}

╭──────────────────╮
*➼✰︙𝑪𝑹𝑬𝑨𝑫𝑶𝑹 - 𝑶𝑾𝑵𝑬𝑹*
╰──────────────────╯
┋ ⋆⃟⋆⃟🍒 listachat
┋ ⋆⃟⋆⃟🍒 listagrupo
┋ ⋆⃟⋆⃟🍒 public
┋ ⋆⃟⋆⃟🍒 self
┋ ⋆⃟⋆⃟🍒 myip
┋ ⋆⃟⋆⃟🍒 chat
┋ ⋆⃟⋆⃟🍒 reac
┋ ⋆⃟⋆⃟🍒 join
┋ ⋆⃟⋆⃟🍒 salir
┋ ⋆⃟⋆⃟🍒 wm
┋ ⋆⃟⋆⃟🍒 block
┋ ⋆⃟⋆⃟🍒 unblock

■██■▰▱▰▱▰▱■██■
*┏ೋ━ೋ✧ೋ━ೋ┓*
     *🌠 𝑲𝑹𝑰𝒁𝑪𝑯𝑨𝑨𝑵 🌠*
*┗ೋ━ೋ✧ೋ━ೋ┛*
*■██■▰▱▰▱▰▱■██■`.trim();
  const buttonMessage= {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${pushname}`,
        body: "Suscribete ami canal Papu",
        thumbnailUrl: "https://i.ibb.co/S37DL7B/images-1-1.jpg",
        sourceUrl: "http://youtube.com/@Kriz_Chaan",
        mediaType: 1,
        renderLargerThumbnail: true
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(prueba|creator|creador|propietario)$/i;
export default handler;
