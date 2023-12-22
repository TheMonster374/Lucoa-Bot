

import axios from 'axios'
var handler = async (m, {conn, args, text, command, usedPrefix}) => {
    const r = await axios.get(`https://api.xyroinee.xyz/api/downloader/instagram?url=${text}&apikey=uwgflzFEh6`)
  const ress = r.data.result
  /*const a = `Titulo :* ${ress.title}
*Duracion :* ${ress.duration}
*Vistas :* ${ress.views}
*Publicado :* ${ress.upload}
*Likes :* ${ress.like}
*Dislikes :* ${ress.dislike}`;*/
     let quality = ress.media.find(item => item.quality === 480);
   if (quality.quality == 480) {
  };
};
handler.command = /^(InstagramXD)$/i;
export default handler
