// Metodos de objeto, 'this'

// EJERCICIÓS

// Crea una calculadora

// Crea un objeto calculadora con tres métodos:

// - read() pide dos valores y los almacena como propiedades de objeto con nombre a y b

// - sum() Devuelve la suma de los valores almacenados

// - mul() Multiplica los valores almacenados y devuelve el resultado

const calculadora = {
  read() {
    this.a = +prompt("Introduce el valor de a: ", 0);

    this.b = parseInt(prompt("Introduce el valor de b: "));
  },
  sum() {
    console.log(`Resultado Suma: ${this.a + this.b}`);
  },
  mul() {
    console.log(`Resultado de Mul: ${this.a * this.b}`);
  },
};

calculadora.read();
calculadora.sum();
calculadora.mul();
