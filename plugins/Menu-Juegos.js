const handler = async (m, {conn, usedPrefix}) => {
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = ` 
╭─────────────┈⊷
│「 _*ᴊᴜᴇɢᴏꜱ*_ 」
╰────────────┈⊷  

🐶͘͜  _mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
🐶͘͜  _fake *<texto1> <@tag> <texto2>*_
🐶͘͜  _ppt *<papel / tijera /piedra>*_
🐶͘͜  _prostituto *<nombre / @tag>*_
🐶͘͜  _prostituta *<nombre / @tag>*_
🐶͘͜  _gay2 *<nombre / @tag>*_
🐶͘͜  _lesbiana *<nombre / @tag>*_
🐶͘͜  _pajero *<nombre / @tag>*_
🐶͘͜  _pajera *<nombre / @tag>*_
🐶͘͜  _puto *<nombre / @tag>*_
🐶͘͜  _puta *<nombre / @tag>*_
🐶͘͜  _manco *<nombre / @tag>*_
🐶͘͜  _manca *<nombre / @tag>*_
🐶͘͜  _rata *<nombre / @tag>*_
🐶͘͜  _love *<nombre / @tag>*_
🐶͜  _doxear *<nombre / @tag>*_
🐶͘͜  _pregunta *<texto>*_
🐶͘͜  suitpvp *<@tag>*_
🐶͘͜  _slot *<apuesta>*_
🐶͘͜  _buscaminas*_
🐶͘͜  _ttt *<nombre sala_
🐶͘͜  _delttt_
🐶͘͜  _acertijo_
🐶͘͜  _sorteo (nombre de lo que va a sortear)_
🐶͘͜  _adivinaelnumero_         
🐶͘͜  _apocalypto_ 
🐶͘͜  _top *<texto>*_
🐶͘͜  _topparejas_
🐶͘͜  _amistad_
🐶͘͜  _ruleta_
🐶͘͜  _trivia_
🐶͘͜  _topotakus_
🐶͘͜  _formarpareja_
🐶͘͜  _verdad_
🐶͘͜  _reto_
🐶͘͜  _cancion_
🐶͘͜  _pista_
🐶͘͜  _advpe_
🐶͘͜  _palabra_

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua-Bot`},
    'mimetype': `application/${document}`,
    'fileName': `𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua-Bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝐌𝐄𝐍𝐔 𝐉𝐔𝐄𝐆𝐎𝐒',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://github.com/AleXD0009/Jotchua-Bot.git'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(MenuJuegos|Juegos|menuJuegos|menujuegos|juegos)$/i;
export default handler;
