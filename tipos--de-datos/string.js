// Strings

// Ejercicios

// Hacer mayúsculas el primer caracter

// Escribe una función ucFirst(str) que devuelva el string str con el primer caracter en mayúscula

let text = "airy";
const usFisrt = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

console.log(usFisrt(text));

// Buscar spam

// Escribe una función checkSpam(str) que devuelva true si str contiene 'viagra' o 'xxx', de lo contrario false

const checkSpam = (str) => {
  str = str.toLowerCase();

  if (str.includes("viagra")) {
    return true;
  } else if (str.includes("xxx")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkSpam("compra ViAgRA ahora"));
console.log(checkSpam("xxxxx gratis"));
console.log(checkSpam("coneja inocente"));

// Truncar el text

// Creat una función truncate(str, maxlength) que verifique la longitud de str y, si excede maxlength -reemplaza el final de str con el caracter de puntos suspensivos "...", para hacer su longitud igual a maxlength

const truncate = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20)); // = "Lo que me gustaría c…"

console.log(truncate("Hola a todos!", 20)); // = "Hola a todos!"

// Extraer ek dinero

// Tenemos un costo en forma de "$120".Es decir: el Signo de dolar va primero y luego el numero

// Crea una función extractCurrencyValue(str) que extraiga el valor numerico de dicho string y lo devuelva

const extractCurrencyValue = (str) => +str.slice(1);
console.log(extractCurrencyValue("$120") === 120); // true
