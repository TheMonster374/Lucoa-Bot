global.wait = ('Cargando', adReply)
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰', body: 'Whatsapp bot Multi device by als', thumbnail: catalogo, sourceUrl: 'https://atom.bio/als'}}}}, aa);
  if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};
