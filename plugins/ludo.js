const handler = {
    command: "ludo",
    // Función para manejar las acciones del juego
    handle: function(command) {
        switch (command) {
            case "tirarDados":
                // Simular tirada de dados
                break;
            case "moverFicha":
                // Mover ficha según la tirada de dados
                break;
            case "comerFicha":
                // Comer ficha de otro jugador
                break;
            case "ganar":
                // Anunciar ganador
                break;
        }
    }
};
// Inicializar el juego
const juego = new Juego(handler);

while (true) {
    // Leer comando del jugador
    const comando = leerComando();

    // Procesar comando
    juego.handle(comando);

    // Actualizar la interfaz del juego
    actualizarInterfaz();
}
