// Constructor, operador "new"

// Función constructora

// La función constructora es Técnicamente una función normal. Aunque hay dos convenciones:

// 1. Son nombradas con la primera letra mayúscula.
// Sólo deben ejecutarse con el operador "new"

function User(name) {
  (this.name = name), (this.isAdmin = false);
}

let user = new User("Jack");
console.log(user.name);
console.log(user.isAdmin);

// Cuando una función es ejecutada con new, realiza los siguientes pasos:

// 1. Se crea un nuevo objeto vacío y se asigna a this

// 2. Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades

// 3. Se devuelve el valor de this

// Metodos en Constructor

function User2(name) {
  (this.name = name),
    (this.sayHi = function () {
      console.log(`Mi nombre es ${this.name}`);
    });
}

let airy = new User2("Airy");

airy.sayHi();

//Ejercicios

//Dos funciones un objeto

// Crear funciones A y B para que se cumpla new A() === new B()
const obj = {};
function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();

let b = new B();

console.log(a == b);

// Crear una Calculadora

// Crear una función constructora Calculator que crea objetos con 3 métodos:

// read() pide dos valores usados prompt y los guarda en las propiedades del objeto con los nombres a y b

// sum() devuelve la suma de estas propiedades

// mul() devuelve el producto de la multiplicación de estas propiedades

// function Calculator() {
//   this.read = () => {
//     this.a = +prompt("Ingresa el primer valor: ");

//     this.b = +prompt("Ingresa el segundo valor: ");
//   };

//   this.suma = () => {
//     console.log(`suma de ${this.a} + ${this.b} =`, this.a + this.b);
//   };

//   this.mul = () => {
//     console.log(`multiplicación de ${this.a} * ${this.b} =`, this.a * this.b);
//   };
// }

// const operaciones = new Calculator();
// operaciones.read();

// operaciones.suma();

// operaciones.mul();

// Crear nuevo Acumulador

// Crear una función constructor Accumulator(stringValue)

// El objeto que crea debería:

// -Almacenar el "valor actual" en la propiedad value. El valor inicial se establece en el argumento del constructor startingValue

// -El método read() debe de usar prompt para leer un nuevo número y agregarlo a value

// En otras palabras, la propiedad value es la suma de todos los valores ingresados por el usuario con el valor inicial startingValue

function Accumulator(valuer) {
  this.value = valuer;
  this.read = () => {
    this.value += +prompt("Ingresa un número: ");
  };
}

let acumular = new Accumulator(1);

acumular.read();
acumular.read();

console.log(acumular.value);
