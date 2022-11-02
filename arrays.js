//METODO AT()
   //let arr = [1,2,3,4,5]
   //console.log(arr.at(3))

//El metodo at() recibe un valor numerico como parametro y devuelve el elemento que este en esa posicion


//METODO CONCAT()
    // const letters = ['a', 'b', 'c'];
    // const numbers = [1, 2, 3];
    // console.log(letters.concat(numbers))

//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.


//METODO ENTRIES()
    //  var a = ['a', 'b', 'c'];
    //  var iterator = a.entries();

    //  for (let e of iterator) 
    //  console.log(e);

// el metodo entries() devuelve un objeto iterable que contiene los pares para cada indice del arreglo

//METODO EVERY()
//    let arr = [1, 30, 39, 29, 10, 13]
//    let result = arr.every((item) => item < 40)
//    console.log(result)

//El metodo every() determina si todos los elementos del array cumplen una condicion


//METODO FILL()
//    let arr = [1,2,3]
//    console.log(arr.fill(4))

//El metodo fill() cambia todos los elementos del array por un valor estatico



//METODO FILTER()
    // let arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
    // let result = arr.filter((item) => item.length > 5)
    // console.log(result)

//El metodo filter() crea un nuevo array con todos los elementos que cumplan una condicion dada



//METODO FIND()
    //  let arr = [5, 12, 8, 130, 44]
    //  let result = arr.find((item) => item > 10)
    //  console.log(result)

//El metodo find() devuelve el primero elemento del array que cumpla la condicion


//METODO FINDINDEX()
    // let arr = [5, 12, 8, 130, 44]
    // let result = arr.findIndex((item) => item > 10)
    // console.log(result)

//El metodo findIndex() devuelve el indice del primer elemento del array que cumpla la condicion


//METODO FINDLAST()
    // const array1 = [5, 12, 50, 130, 44];

    // const found = array1.findLast((element) => element > 45);

    // console.log(found);

//El metodo findLast() recorre el array en orden inverso y devuelve el primer elemento que cumpla una condicion dada


//METODO FINDLASTINDEX()
    // let arr = [10,11,12,14,15]
    //  let result = arr.findLastIndex((item) => item > 10)
    //  console.log(result)

// El metodo findLastIndex() recorre el array en orden inverso y devuelve el indice del primer elemento que cumpla la condicion


//METODO FLAT()
//     let arr = [1, 2, [3, [4]],]
//     let result = arr.flat(Infinity)
//    console.log(result)

// El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada. 



// METODO FLATMAP()
    // const arr1 = [1, 2, [3], [4, 5], 6, []]
    // const result = arr1.flatMap(num => num)
    // console.log(result)

// El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz.


//METODO FOREACH()
    // const each = (arr) =>{
    //     let result = []
    //     arr.forEach(element => {
    //      result.push(element)
    //    })
    //    return result
    // }

    // console.log(each(["a","b","c","d"]))

// El metodo forEach() recorre cada elemento del array, el forEach no retorna nada, en el caso que se lo asignemos a otra variable nos retorna la ultima iteracion que realiza en el array



// METODO Array.FROM 
//    let string = "California"
//    let result = Array.from(arr)
//    console.log(result)

// El metodo Array.from() crea un array a partir de un objeto iterable


// METODO INCLUDES()
//    let arr = ["California","Maracaibo","Usa","Los Angeles"]
//    let result = arr.includes("Usa")
//    console.log(result)

// El metodo includes() devuelve true o false dependiendo si cierto elemento existe dentro del array


// METODO INDEXOF()
    // let arr = [1,2,0]
    // let result = arr.indexOf(3)
    // console.log(result)

// El metodo indexOf() retorna el indice donde se encuentre el elemento que le estemos pasando como parametro en el indexOf, en caso de que no se encuentre ningun elemento retorna -1


// METODO Array.isArray()
    // let arr = "Hola"
    // let result = Array.isArray(arr)
    // console.log(result)

// El metodo Array.isArray() determina si el valor pasado es un array, en caso de que no lo sea retorna false


// METODO JOIN()
    // let arr = [1,2,3]
    // let result = arr.join(".")
    // console.log(result)

// El metodo join() une todos los elementos del array y lo convierte a String, y recibe un parametro de separacion donde cada elemento lo podemos separar con el caracter que queramos


// METODO KEYS()
// const array1 = ['a', 'b', 'c',"d"];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// El metodo keys() devuelve un nuevo objeto iterable que contiene las claves de índice con las que se accede a cada elemento en el array.



//METODO LASTINDEXOF()
    // const array = ["Germany","Spain","Usa","Spain"]
    // const result = array.lastIndexOf("Spain")
    // console.log(result)

// El metodo lastIndexOf() recorre el array en sentido contrario y devuelve el indice de la primera coincidencia que consiga


//METODO MAP()
//    const students = [{
//      name: "Jose",
//      lastname: "Saavedra"
//     },
//     {
//      name: "John",
//      lastname: "Ortiz"
//     },
//     {
//      name: "Michael",
//      lastname: "Jordan"
//     }
//  ]

//     let result = students.map((item) => item.name + " " + item.lastname)
//     console.log(result)

// El metodo map() nos permite recorrer el array y poder crear un nuevo array a partir de lo que queramos hacer en ese array


// METODO ARRAY.OF()
//    let result = Array.of("Jose","Saavedra")
//    console.log(result)

// El metodo Array.of() crea un array a partir de los parametros que le pasemos

//METODO POP()
//    let vegetales = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
//     vegetales.pop()
//    console.log(vegetales)

// El metodo pop elimina el ultimo elemento del array y tambien al eliminarlo puede devolverlo


// METODO PUSH
//    let food = ["Orange", "Banana", "tomato", "chicken"]
//    let result = food.push("Rice")
//    console.log(food)

// El metodo push puede añadir uno o mas elementos al final del array y devuelve la nueva longitud del array


 //METODO REDUCE()
//   const developers = [
//       {
//         id: 1,
//         name: "John",
//       skills: ["HTML", "React", "JavaScript", "Java"],
//      },
//      {
//        id: 2,
//       name: "Jane",
//        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
//       },
//      {
//         id: 3,
//        name: "Jack",
//        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
//      },
//    ]
//    let result = developers.reduce((acc,item) => Array.from(new Set([...acc, ...item.skills])),[])
//    console.log(result)

// El metodo reduce, reduce todos los elmentos de un array en un unico valor


// METODO REVERSE()
//    let objects = ["Book", "Pencil", "Backpack", "Scissors"]
//    let result = objects.reverse()
//    console.log(result)

// El metodo reverse nos permite invertir el orden de los elementos que estan en el array


// METODO SHIFT()
//    let objects = ["Book", "Pencil", "Backpack", "Scissors"]
//    objects.shift()
//    console.log(objects)

// El metodo shift elimina el primer elemento del array


// METODO SLICE()
    // let names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
    // let result = names.slice(0,4)
    // console.log(result)

// El metodo slice() nos permite copiar la parte del array que queramos 


// METODO SOME()
//  let objects = ["Book", "Pencil", "Backpack", "Scissors"]
//  let result = objects.some((item) => item.length < 4)
//  console.log(result)

// El metodo devuelve true o false comprobando si al menos un elemento del array cumple cierta condicion


// METODO SORT()
//    let frutas = ["Banana", "Fresa", "Mango", "Durazno", "Manzana"]
//    let result = frutas.sort((a,b) => a.length - b.length)
//    console.log(result)

// El metodo sort() nos permite ordenar el array alfabeticamente, de manera ascendente, o de manera descendente

// METODO SPLICE()
    // const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Dec']
    // let result = months.splice(4,2,1)
    // console.log(result)

// El


// METODO TOSTRING()
//    const arr = [1, 2, 'a', '1a']
//    let result = arr.toString()
//    console.log(result)

// EL metodo toString() une todos los elementos del array separados por comas y los convierte en una cadena de caracteres



// METODO UNSHIFT()
//    const nations = ["Usa", "France", "Italy", "Belgium"]
//     nations.unshift("Venezuela")
//    console.log(nations)

// El metodo unshift añade uno o mas elementos al incio del array y puede devolver la nueva longitud del array



// METODO VALUES()
let arr = ['w', 'y', 'k', 'o', 'p', 's'];
let iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}

// El metodo Values() devuelve un objeto iterable con los valores de cada indice del array