/**
 * @file spread-array.ts
 * @version 1.0
 * @author Víctor Cuervo - http://lineadecodigo.com
 * @date   29/agosto/2017
 * @url  http://lineadecodigo.com/typescript/extender-array-typescript/
 * @description Extender arrays mediante el operador ...
 */

namespace Spread {

  let arr1:number[] = [2,3];
  let arr2:number[] = [5,6];

  let numeros:number[] = [0,1, ...arr1, 4, ...arr2];

  console.log(numeros);

}
