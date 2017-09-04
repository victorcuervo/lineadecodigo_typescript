/**
 * @file interface-poco-estricto.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   5/septiembre/2017
 * @url  http://lineadecodigo.com/typescript/interface-de-una-funcion-en-typescript/
 * @description Definir un interface aplicable a una función.
 */

interface CalculoAreaTriangulo {
  (base:number, altura:number):number;
}

let miCalculo: CalculoAreaTriangulo;

miCalculo = function(b:number,a:number) {
  return (b*a)/2;
}

console.log(miCalculo(2,2));
