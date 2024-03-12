const fs = require('node:fs')

fs.readFile('./archivo1.txt', (error, datos) => {
  if (error)
    console.log(error)
  else
    console.log(datos.toString())// método toString() si no hacemos esto en pantalla mostrará los valores numéricos de los caracteres.
})

console.log('última línea del programa')
