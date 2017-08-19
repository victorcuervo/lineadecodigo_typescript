/**
 * @file enumerados.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   20/agosto/2017
 * @url  http://lineadecodigo.com/typescript/enumerados-en-typescript/
 * @description Definir enumerados en TypeScript
 */

// Definir y utilizar un enumerado
enum Color {Rojo,Verde,Azul};
let c1:Color = Color.Rojo;

// Acceso al nombre
let c3:string = Color[2];
console.log(c3);

// Asignando otro valor numérico, ya que por defecto empieza en 0
enum Ciudad {Avila=12,Segovia=14,Salamanca=16};
let miCiudad:Ciudad = Ciudad.Avila;
