let handler = async (m, {
	command,
	args,
	text,
	usedPrefix
}) => {
 
}

handler.command =/^(tutorial|tuto|new|nuevo)/i 
handler.help = ['tutorial'] 
handler.tags = ['Principiantes']  
handler.group = true
handler.fail = null
handler.register = false
export default handler 
