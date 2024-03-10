let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 HelloKitty `.trim(), m)
};
handler.help = ["hellokitty"];
handler.tags = ["img"];
handler.command = /^(hellokitty)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/f7caab6d527f9f05ee62c.jpg",
  "https://telegra.ph/file/04f5e603c1f9e0e3d96dd.jpg",
  "https://telegra.ph/file/7edec9dbf21fb338e1adb.jpg",
  "https://telegra.ph/file/3086bd60dbdd808dc4789.jpg",
  "https://telegra.ph/file/d80db2847746fdf8bbe16.jpg",  
  "https://telegra.ph/file/15add9093b5e6d1361938.jpg",
  "https://telegra.ph/file/b663a5a8b290c654367a6.jpg",
  "https://telegra.ph/file/b22caad8cc369e8023190.jpg",
  "https://telegra.ph/file/efafc0ff36449c86606a6.jpg",
  "https://telegra.ph/file/187ce0e01813b1b719015.jpg",
];
