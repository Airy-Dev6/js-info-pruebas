// const coto = "hola bro";
// const coco = "agua de coco";
// const user = {
//   //   coto,
//   name: "Airy ",
//   age: 24,
// };

// Formas de acceder a una propiedad de un objeto
// console.log("name" in user);
// console.log(user["name"]);

// for (key in user) {
//   console.log(key);
//   console.log(`${key} : ${user[key]}`);
// }

// EJERCICIO 1
// Escribe el código, una línea para cada acción:

// Crea un objeto user vacío.
// Agrega la propiedad name con el valor John.
// Agrega la propiedad surname con el valor Smith.
// Cambia el valor de name a Pete.
// Remueve la propiedad name del objeto.

// const user = {};

// user["name"] = "Airy";
// console.log(user);

// user["surname"] = "Silva";
// console.log(user);

// user["names"] = "Pete";
// console.log(user);

// delete user["name"];
// console.log(user);

// EJERCICIO 2

// Escribe la función isEmpty(obj) que devuelva el valor true si el
// objetivo no tiene proppiedades, en caso contrario false.

// const objeto = {
// name: "Airy",
// lastName: "Silva",
// };

// Primera forma de escribir la función
// const isEmpy = (obj) => {
//   const longObj = Object.keys(obj).length;
//   return longObj === 0 ? true : false;
// };

//Segunda forma de escribir la función
// const isEmpty = (obj) => {
// for (let prop in obj) {
// return true;
// }
// return false;
// };

// console.log(objeto);
// console.log(isEmpy(objeto));
// console.log("¿El obj tiene contenido? ", isEmpty(objeto));

// Ejercicio 3

// Tenemos un objeto que almacena los salarios de nuestro equipo

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 'sum'. Nos debe de dar 390

// Si SALARIO está vacío entonces el resultado será 0

// let suma = 0;

// const sumSalaries = (obj) => {
//   if (Object.keys(obj).length > 0) {
//     for (let prop in obj) {
//       let s = obj[prop];
//       suma += s;
//     }
//     return suma;
//   } else {
//     return suma;
//   }
// };

// console.log(sumSalaries(salaries));

// EJERCICIO 4

// Crea una función 'multiplyNumeric(obj)' Que multiplique todas las propiedades numéricas de obj por 2

const menu = {
  width: 200,
  heigth: 300,
  title: "Mi menú",
};

const multiplyNumeric = (obj) => {
  for (prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] = obj[prop] * 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);
