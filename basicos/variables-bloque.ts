/**
 * @file variables-bloque.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/typescript/variables-de-bloque-en-typescript/
 * @description Definir variables de ámbito bloque en TypeScript
 */



function mifuncion() {

 let a:number = 1;
 let validar:boolean = true;

 if (validar) {
   var b:number = 2;
   let c:number = a+b;
 }

 console.log(b);
 //console.log(c);

}

mifuncion();
