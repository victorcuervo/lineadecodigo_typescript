/**
 * @file constantes.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/typescript/constantes-en-typescript/
 * @description Definir constantes en TypeScript
 */

const mayor_de_edad:number = 18;
let edad:number = 12;

if (edad > mayor_de_edad)
  console.log(`Es mayor de edad, ya que tiene más de ${mayor_de_edad} años`);
else
  console.log(`Es menor de edad, ya que tiene menos de ${mayor_de_edad} años`);

// mayor_de_edad = 21; // Da error
