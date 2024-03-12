const fs = require('node:fs')

/*El primer parámetro es el nombre del archivo de texto a crear.
El segundo parámetro es el string a grabar en el archivo de texto
el tercer parámetro es una función anónima que será llamada desde el interior de la función writeFile cuando haya terminado de crear y grabar el string en el archivo de texto.
*/ 
fs.writeFile('./archivo1.txt', 'Mi primer txt', error => {
  if (error)
    console.log(error)
  else
    console.log('El archivo fue creado')
})

console.log('última línea del programa')