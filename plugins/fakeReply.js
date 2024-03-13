export async function before(m, { conn }) {
		// Respuesta de anuncio 
 global.adReply = {
			contextInfo: {
			mentionedJid: [m.sender],
				forwardingScore: 9999,
				externalAdReply: {
				showAdAttribution: true,
					title: packname,
					body: desc,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnail: imagen2,
					sourceUrl: null
				}
			}
		}
}
