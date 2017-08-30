/**
 * @file arrays-solo-lectura.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   30/agosto/2017
 * @url  http://lineadecodigo.com/typescript/arrays-de-solo-lectura-en-typescript/
 * @description Crear un array de solo lectura con TypeScript
 */

let tallas:ReadonlyArray<string> = ['xs','s','m','l','xl'];

// Mostrar un elemento
console.log(tallas[1]);

// No podemos añadir nuevos elementos
// miarray.push('xxl');

// Ni modificar los existentes
// miarray[2] = 'M';
