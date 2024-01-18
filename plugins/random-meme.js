/*
     ig : https://www.instagram.com/fg98._/
*/
import hispamemes from 'hispamemes';
const handler = async (m, {command, conn}) => {
  const url = await hispamemes.meme();
  conn.sendFile(m.chat, url, 'error.jpg', `_${command}_`, m);
};
handler.help = ['meme'];
handler.tags = ['random'];
handler.command = /^(meme|memes)$/i;
export default handler;
