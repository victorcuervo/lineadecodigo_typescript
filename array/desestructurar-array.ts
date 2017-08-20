/**
 * @file desestructurar-array.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   21/agosto/2017
 * @url  http://lineadecodigo.com/typescript/desestructurar-un-array-en-typescript/
 * @description Proceso que nos permite desestructurar un array en TypeScript
 */


let ciudades:string[] = ['Ávila','Salamanca','Zamora','León','Valladolid'];
let [c1,c2, ...resto] = ciudades;

console.log(c1);
console.log(c2);
console.log(resto);
