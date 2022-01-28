/** @format */

// 1= ok
// 2= ok
// 3= ok
// 4= ok
// 5= ok
// 6= ok
// 7= ok
// 8= ok
// 9= ok
// 10= ok

// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function createArrayOfElements(number, value) {
  const result = Array.from({ length: number }).fill(value);
  console.log(result);
  return result;
}

// createArrayOfElements(3, 'a');

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function InverseArray(array) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  console.log(newArray);
  return newArray;
}

// InverseArray([1, 2, 3, 4]);

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function cleanArray(value) {
  const newArray = value.filter((element) => element);
  console.log(newArray);
  return newArray;
}
// cleanArray([1,2,'', undefined])

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function objFromArray(value) {
  const newArray = value.reduce((acc, [first, second]) => {
    return { ...acc, [first]: second };
  }, {});
  console.log(newArray);
  return newArray;
}

// objFromArray([
// 	['c', 2],
// 	['d', 4],
// ]);

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método:
// [4,2]

function lengthOf(array, ...rest) {
  const newArray = array.filter((element) => !rest.includes(element));
  console.log(newArray);
}

// lengthOf([5, 4, 3, 2, 5], 5, 3);

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function filterArray(array) {
  const newArray = array.filter((ele, index) => {
    return array.indexOf(ele) === index;
  });
  console.log(newArray);
  return newArray;
}

// filterArray([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function isEqual(arrayOne, arrayTwo) {
  const areTheyEqual = arrayOne.every((element, i) => element === arrayTwo[i]);
  console.log(areTheyEqual);
  return areTheyEqual;
}

// isEqual([1, 2, 3, 4], [1, 2, 3, 4]);

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function flatArray(array) {
  const newArray = array.flatMap((element) => element);
  console.log(newArray);
  return newArray;
}
// flatArray([1, 2, [3], [4, 5]])

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function splitArray(array, size) {
  const newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(array.slice(i, i + size));
    i += size;
  }
  console.log(newArray);
  return newArray;
}

// splitArray([1, 2, 3, 4, 5], 2);

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function findWhich(arrayOne, arrayTwo) {
  const newArray = arrayOne.filter((element) => arrayTwo.includes(element));

  console.log(newArray);
  return newArray;
}

// findWhich([6, 8], [8, 9]);
