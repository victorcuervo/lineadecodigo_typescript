/**
 * @file interface.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   30/agosto/2017
 * @url  http://lineadecodigo.com/definir-interface-typescript/
 * @description Definir un interface básico en TypeScript
 */

interface Persona {
  nombre: string;
  edad: number;
}

function datosPersona(p: Persona) {
  console.log(p.nombre);
}

let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);

let p2 = {nombre:'Carmen', localidad:'Zaragoza'};
// datosPersona(p2);
