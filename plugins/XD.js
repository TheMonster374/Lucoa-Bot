var handler = async (m, { text,  usedPrefix, command }) => {

// Definir un array con los jugadores
var jugadores = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4", "Jugador 5"];

// Función para simular la ruleta rusa
function ruletaRusa(jugadores) {
  var disparo = Math.floor(Math.random() * jugadores.length); // Generar un número aleatorio
  conn.sendFile(m.chat, disparo, 'error.jpg', ``, m);
  console.log("El jugador " + jugadores[disparo] + " ha sido eliminado."); // Mostrar el jugador eliminado
  jugadores.splice(disparo, 1); // Eliminar al jugador del array
}

// Llamar a la función para simular la ruleta rusa
ruletaRusa(jugadores);
}
  handler.command = ['xd']
