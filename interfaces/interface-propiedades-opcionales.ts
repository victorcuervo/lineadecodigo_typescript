/**
 * @file interface-propiedades-opcionales.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   30/agosto/2017
 * @url  http://lineadecodigo.com/typescript/interfaces-propiedades-opcionales-typescript/
 * @description Definir un interface con propiedades opcionales en TypeScript
 */

interface Persona {
  nombre: string;
  edad?: number;
}

function datosPersona(p: Persona) {
  console.log(p.nombre);
}

let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);

let p2 = {nombre:'Carmen', localidad:'Zaragoza'};
datosPersona(p2);
