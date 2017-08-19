/**
 * @file tupla.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/typescript/tupla-en-typescript/
 * @description Código que nos explica cómo se define una tupla en TypeScript
 */

let tupla: [string, number,string];
tupla = ['España',10,'Madrid'];

console.log(tupla[0]);
console.log(tupla);

tupla[0] = 'Francia';
tupla[1] = 20;
tupla[0] = 'Paris';
