// Solicitar al usuario ingresar el peso de 5 peces, almacenar esos valores en un array
//  y luego imprimir en consola el pez de mayor peso y el de menor peso.  

// Condiciones:  
//  NO debe ser código hardcodeado
//  En caso de necesitar usar más de un ciclo no usar 2 veces el mismo ciclo 
//  ej:  En lugar de utilizar 2 for utilizo 1 while y 1 for.

let peces = [];
let mayor = 0;
pez = []
while (peces.length<=4) {
  const pez = prompt("ingreso el peso del pez");
  peces.push(parseInt(pez));
} console.log(peces);

console.warn("Pez de mayor peso")

for (let index = 0; index < peces.length; index++) {
  if (peces[index]>mayor) {
    mayor = peces[index];
  }  
}console.log(mayor);

console.warn("Pez de menor peso");

for (let index = 0; index < peces.length; index++) {
  if (peces[index]<mayor) {
    mayor = peces[index];
  }  
}console.log(mayor);

console.warn("Probando math");

console.log(Math.max(...peces));
console.log(Math.min(...peces));