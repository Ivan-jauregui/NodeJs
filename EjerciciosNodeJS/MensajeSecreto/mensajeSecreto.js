const fs = require('fs');

function decodificarMensaje(mensaje) {
    //Buscar todas las palabras o frases entre paréntesis
    return mensaje.replace(/\((.*?)\)/g, (match, gruop1) => {
        
        return gruop1.split('').reverse().join('');
    });
}

//Leer el mensaje codificado del archivo SECRETO.IN
fs.readFile('SECRETO.IN','utf8',(err, data) => {
    if (err){
        console.error('Error para leer el archivo SECRETO.IN:',err);
        return;
    }

    const mensajeDecodificado = decodificarMensaje(data);

    //Escribir el mensaje decodificado en el archivo SECRETO.OUT
    fs.writeFile('SECRETO.OUT', mensajeDecodificado,(err) =>{
        if (err){
            console.error('Error para escribir el archivo SECRETO.OUT:', err);
            return;
        }console.log('El mensaje sea decodificado en el archivo SECRETO.OUT');
    });
});
