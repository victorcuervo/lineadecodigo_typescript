/**
 * @file interface-solo-lectura.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   31/agosto/2017
 * @url  http://lineadecodigo.com/typescript/interfaces-solo-lectura-typescript/
 * @description Definir un interface con propiedades de solo lectura en TypeScript
 */

interface Persona {
  readonly nombre: string;
  readonly edad: number;
}

function datosPersona(p: Persona) {
  // p.nombre = 'Víctor'; // La propiedad es de solo lectura y no se puede modificar
  console.log(p.nombre);
}

let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);

let p2 = {nombre:'Carmen', localidad:'Zaragoza'};
// datosPersona(p2);
