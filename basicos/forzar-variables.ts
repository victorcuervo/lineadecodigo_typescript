/**
 * @file forzar-variables.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/typescript/forzar-tipo-variable-typescript/
 * @description Como forzar el tipo de una variable en TypeScript. Type Assertion.
 */

let y:any = "Hola"

// Mediante <>
let size:number = (<string>y).length;
console.log(size);

// Mediante as
let size2:number = (y as string).length;
console.log(size2);
