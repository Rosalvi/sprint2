// Arrow functions

const add = (a, b) => a + b;

const randomNumber = () => Math.floor(Math.random() * 100);

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => `Hello, my name is ${this.name}`;
}

const printNumbers = numbers => {
  numbers.forEach(number => {
    console.log(number);
  });
};

const saludoTimer = setTimeout(() => {
  console.log('Hola saludo');
}, 3000);

const numbers = [1, 2, 3, 4, 5];

console.log('add', add(1, 2));
console.log('random', randomNumber());
const person = new Person('John');
console.log('greet', person.greet());
printNumbers(numbers);
saludoTimer;

// Operador Ternari

const potConduir = edad => {
  return edad >= 18 ? 'Puedes conducir' : 'No puedes conducir';
};

const greaterThan = (a, b) => {
  return a > b ? a : b;
};

const whatIsTheNumber = number => {
  return number > 0 ? 'Es positivo' : number < 0 ? 'Es negativo' : 'Es cero';
};

const trobarMaximo = (a, b, c) => {
  return a > b && a > c ? a : b > c ? b : c;
};

const parOimpar = numbers => {
  numbers.forEach(number => {
    console.log(number % 2 === 0 ? 'Es par' : 'Es impar');
  });
};

parOimpar(numbers);
console.log(potConduir(18));
console.log(greaterThan(5, 10));
console.log(whatIsTheNumber(0));
console.log(trobarMaximo(1, 2, 3));

//callbacks

const saludoPersonalizado = (nombre, callback) => {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback();
  }, 2000);
};

const despedida = () => {
  console.log('Adios');
};

console.log(saludoPersonalizado('Juan', despedida));

const calculadora = (a, b, suma) => {
  return suma(a, b);
};

console.log("calculadora", calculadora(1, 2, add));

const esperarISaludar = (nombre, callback) => {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
};

const saludar = nombre => {
  console.log(`Hola ${nombre}`);
};

console.log(esperarISaludar('Juan', saludar));

const processarElements = (array, callback) => {
  array.forEach(element => {
    callback(element);
  });
};

nombres = ['Juan', 'Pedro', 'Maria'];

console.log(processarElements(nombres, saludar));

urgencia = cadena => {
  return cadena + ' AHORA !!!';
};

const processarCadena = (cadena, callback) => {
  cadena = cadena.toUpperCase();
  return callback(cadena);
};

console.log(processarCadena('ven aqui', urgencia));

// Rest & Spread operators

const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];

const numerosCompletos = [...numeros1, ...numeros2];

const suma = (...args) => {
  let sum = 0;
  args.forEach(number => (sum += number));
  return sum;
};

console.log("suma", suma(1, 2, 3, 4, 5, 6));

const persona1 = {
  nombre: 'Pedro',
  apellido: 'Perez',
  edad: 24,
  profesion: 'bombero',
};

const persona2 = { ...persona1 };

persona2.profesion = 'abogado';

console.log(persona1), console.log(persona2);

const trabajadores= ["presidente", "vicepresidente", "empleado1", "empleado2", "empleado3"]

const [jefe, director, ...empleados] = trabajadores; 

console.log("jefe", jefe);
console.log("director", director); 
console.log("trabajadores", trabajadores); 


const numerosSpread = [1,10,50]

console.log("trobarmaximoSpread", trobarMaximo(...numerosSpread))


const frontendDeveloper = {
   tecnologiaFrontend : "React", 
   ux : "alto",
   ui : "alto",
   sistemadeDiseño: "completado"
}

const backendDeveloper = {
    dataBase: "completado", 
    logica: "alta", 
    tecnologìaBackend: "node"
}

const fullStackDeveloper = {...frontendDeveloper, ...backendDeveloper}

console.log(fullStackDeveloper)


// Array Transformations 

const squared = numbers.map(x => x**2)
console.log("squared", squared)

const onlyPairs = numbers.filter(x => x % 2 === 0)

console.log(onlyPairs, "Solo pares")

const greaterThanTen = [1, 10 , 8, 11].filter(x => x>10)

console.log(greaterThanTen)


const totalArray = [13, 7, 8, 21].reduce((total, x) => total + x, 0);


console.log(totalArray)

const transformArray = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const transformedArray = transformArray.filter(x => x >= 10).map(x => x*2).reduce((total, x) => total + x, 0);

allgreaterthan10 = [11, 12, 13, 14].every(x => x > 10)
console.log(allgreaterthan10)
anygreaterthan10 = [11, 12, 13, 14].some(x => x > 10)
console.log(anygreaterthan10)

// Array Loops 

// Nivell 1 Exercici 1 
let names = ['Anna', 'Bernat', 'Clara']

names.forEach(name => console.log(name))

// Nivell 1  Exercici 2

for (name_person of names) {
    console.log(name_person )
}

// Nivell 1  Exercici 3 

const newArray = [1, 2, 3, 4, 5, 6].filter(x => x % 2 === 0)

// Nivell 2 Exercici 4 

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };

for (key in obj) {
    console.log(key + ': ' + obj[key]);
}
// Nivell 2 Exercici 5

let numeros = [1, 2, 3, 4, 5];

for (numero of numeros) {  
  if (numero === 5) {
        break;
    }
    console.log(numero);
}

// Nivell 3 Exercici 6

const noms = ['Anna', 'Bernat', 'Clara']

for (let nom in noms) {1
  console.log(nom, noms[nom])
}

// Exercise 1.7 Promises & Async/Await

// Nivell 1 Exercici 1 

const miPromesa = new Promise(function (resolve) {
  setTimeout(() => {
    resolve('Hola, món'); 
  }, 2000);
});

//Nivell 1 Exercici 2

miPromesa
  .then((mensaje) => {
    console.log('Promesa resuelta:', mensaje); 
  })
 

// Nivell 1 Exercici 3

const miPromesaConReject = (input) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (input === 'Hola') {
        resolve('Si es hola');
      } else {
        reject('Error: No hay hola');
      }
    }, 2000);
})
}

miPromesaConReject("Hola").then((mensaje) => {
  console.log(mensaje);
}
).catch((error) => {
  console.log(error);
});

miPromesaConReject("adios").then((mensaje) => {
  console.log(mensaje);
}).catch((error) => {
  console.log(error);
});

// Nivell 1 Exercici 4

async function mostrarResultadoPromesa() {
  const resultado = await miPromesa;
  console.log('Resultado de la promesa:', resultado);
}
mostrarResultadoPromesa();

// Nivell 2 Exercici 5

try {
  const resultadoFinal = await mostrarResultadoPromesa();
  console.log('Resultado final:', resultadoFinal);
}
catch (error) {
  console.log('Error:', error);
}

// Nivell 2 Exercici 6

function promesa1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resultado de la promesa 1');
    }, 2000);
  });
}

function promesa2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resultado de la promesa 2');
    }, 3000);

  });
}

Promise.all([promesa1(), promesa2()])
  .then((resultados) => {
    console.log('Todas las promesas han sido resueltas!');
    console.log('Resultados:', resultados); 
  })
  .catch((error) => {
    console.error('Alguna promesa ha sido rechazada:', error);
  });

