global.wait = (type, m, conn) => {
  const msg = {
    test: 'Cargando',
    owner: '📌 Hola  *este comando solo puede ser utilizado por el propietario del bot*',
    mods: '📌 Hola *este comando solo puede ser utilizado por moderadores del bot y el propietario del bot',
    premium: '📌 Hola *este comando solo puede ser utilizado por premiums y el propietario del bot*',
    group: '📌 Hola @user *este comando solo puede ser utilizado en grupos*',
    private: '📌 Hola  *este comando solo puede ser utilizado por chat privado del bot*',
    admin: '📌 Hola  *este comando solo puede ser utilizado por admins del grupo*',
    botAdmin: '📌 Hola  *para utilizar este comando es necesario que el bot sea admin del grupo*',
    unreg: '📌 Hola  para utilizar este comando necesitas estar registrado\n\n*utiliza el comando:* _/reg nombre.edad_ *para registrarte*',
    restrict: '📌 Hola  este comando fue desactivado por el propietario del bot',
  }[type];
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰', body: 'Whatsapp bot Multi device by als', thumbnail: catalogo, sourceUrl: 'https://atom.bio/als'}}}}, aa);
  if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};
