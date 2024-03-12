const os = require('node:os')

console.log('Memoria libre antes del vector: ' + os.freemem())
const vector=[]
for (let x = 0; x < 1000000; x++) {
  vector.push(x)
}
console.log('Memoria libre despues del vector: ' + os.freemem())