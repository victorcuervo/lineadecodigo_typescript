/**
 * @file swapping-variables.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   29/agosto/2017
 * @url  http://lineadecodigo.com/typescript/swapping-variables-typescript/
 * @description Realizar un swapping entre dos variables
 */

 namespace Swapping {

   let [x,y] = [1,2];

   console.log(x);
   console.log(y);

   // Hacemos el Swapping
   [x,y] = [y,x];

   console.log(x);
   console.log(y);

 }
