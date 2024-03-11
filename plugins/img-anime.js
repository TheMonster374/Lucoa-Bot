import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
};
handler.command = handler.help = ['akiyama', 'asuna', 'chiho', 'chitoge', 'erza', 'elaina', 'emilia', 'hestia', 'inori', 'isuzu', 'kagura', 'kotori', 'kurumi', 'miku', 'sagiri',];
handler.tags = ['img'];
export default handler;

