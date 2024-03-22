let handler = async (m, {
	command,
	args,
	text,
	usedPrefix
}) => {
 // put here your code
}

handler.command = ['tutorial'] // añadir el comando 
handler.help = ['order'] // despliega el comando en el menu
handler.tags = ['main'] // despliega el comando en una categoría 
handler.group = true // Complete verdadero para los comandos a los que no se puede acceder en el chat privado
export default handler // exporta el handler 
