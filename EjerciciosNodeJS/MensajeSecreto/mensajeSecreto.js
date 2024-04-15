const fs = require('fs');

// Función para decodificar un mensaje codificado
function decodificarMensajeCompleto(mensaje) {
    // Buscar todas las palabras o frases entre paréntesis y aplicar la decodificación
    return mensaje.replace(/\((.*?)\)/g, (match, grupo1) => {
        // Invertir el orden de las letras 
        return grupo1.split('').reverse().join('');
    });
}

// Leer el mensaje codificado del archivo SECRETO.IN
fs.readFile('SECRETO.IN', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo SECRETO.IN:', err);
        return;
    }

    // Decodificar el mensaje completo
    const mensajeDecodificado = decodificarMensajeCompleto(data);

    // Escribir el mensaje decodificado en el archivo SECRETO.OUT (sobrescribir el mensaje anterior)
    fs.writeFile('SECRETO.OUT', mensajeDecodificado, (err) => {
        if (err) {
            console.error('Error al escribir el archivo SECRETO.OUT:', err);
            return;
        }
        console.log('Mensaje decodificado guardado en SECRETO.OUT.');
    });
});
