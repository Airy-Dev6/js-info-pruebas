// Formas de copiar un objeto

// clonación y mezcla

// const user = {
//   name: "John",
//   age: 30,
// };

// console.log(user);

// const clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// console.log(clone);

// const clone2 = {};

// Object.assign(clone2, user);

// console.log(clone2);

// user.name = "Airy";

// console.log(user);
// console.log(clone);
// console.log(clone2);

// console.log("-------------------------");

// console.log("Clonación y mezcla, Object.assign");

// const user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Copia todas las propiedades desde permissions1 y permissions2 en user

// Object.assign(user, permissions1, permissions2);

// console.log(user);

// const user = {
//   name: "John",
//   age: 24,
// };

// let clone = Object.assign({}, user);

// console.log(clone);

// También se puede hacer copias de obj con '...obj'
// const clone2 = { ...user };

// console.log(clone2);

// -----------------------------------------------

console.log("Clonación anidada");

const user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

// Usando Object.assign() los objetos que esten dentro de user cambiaran tambien en clone por que se copio la referencia

// const clone = Object.assign({}, user);
// const clone = { ...user };

// structuredClone

// La llamada a structuredClone(object) clona el objecto con todas las toda las propiedades anidadas

const clone = structuredClone(user);

user.sizes.width = 0;
console.log(user);
console.log(clone);
