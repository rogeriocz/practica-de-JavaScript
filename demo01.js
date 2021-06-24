let data = [
  { id: 1, name: "Angelica" },
  { id: 2, name: "Rogerio" },
  { id: 3, name: "Leonardo" },
];

let dataDos = [
  { id: 1, name: "Eduardo", age: 30 },
  { id: 2, name: "Pamela", age: 25 },
  { id: 3, name: "Susana", age: 17 },
];
// splice Eliminando un elemento del array
//data.splice(0, 1);

// Eliminamos un elemento del array con filter
//data = data.filter(x => x.id !==1);

// Obteniendo un registro
let = obj = data.find((x) => x.id === 1);
console.log(obj);

// Agregando una nueva propiedad a los registros de dataDos ene este caso
//agregamos true o false si la edad es mayor a 21
dataDos.forEach((x) => (x.canVote = x.age >= 21));

// Obtener todo los id de nuestra lista de array
let ids = data.map(x => x.id);

console.log(dataDos);
console.log(ids);
