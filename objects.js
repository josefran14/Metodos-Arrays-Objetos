// Metodo Object.assing()
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 }
// let result = Object.assign(target,source)
// console.log(result)


// El metodo Object.assign copia todas las propiedades de los objetos y reemplaza las propiedades


// Metodo Object.create()
//   const person = {
//     isHuman: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`)
//     }
//   }
//   const me = Object.create(person)
//   me.name = "Matthew"
//   me.isHuman = true
//   me.printIntroduction()


// El metodo Object.create() crea un nuevo a partir de un objeto ya existente


// Metodo Object.defineProperties()
// let obj = {
//     nation: "Usa",
//     city: "Miami"
// }
//  Object.defineProperties(obj, {
//     "nation": {
//       value: true,
//       writable: true
//     },
//     "city": {
//       value: "Hello",
//       writable: true
//     }
//  })

// console.log(obj)

// El metodo Object.defineProperties nos permite modificar y crear propiedades de un objeto


// Metodo Object.defineProperty()
// let obj = {
//     key: "on",
//     email: "jose@gmail.com"
// }
// Object.defineProperty(obj, 'key',  {
//     enumerable: true,
//     configurable: true,
//     writable: false,
//     value: 'static',
// });
//console.log(obj)



// El metodo Object.defineProperty nos permite añadir y modficar propiedades de un objeto existente


// Metodo Object.entries()
//    let obj = { foo: 'bar', baz: 42 }
//     let result = Object.entries(obj)
//     console.log(result)


// El metodo Object.entries() nos permite crear cada propiedad/valor de un objeto en sub-arrays de un array


// Metodo Object.freeze()
//    let obj = {
//      name: "Jose"
//    }
//    let result = Object.freeze(obj)
//    obj.lastname = 'Saavedra'
//    console.log(result)


// El metodo Object.freeze() lo que hace es bloquear el objeto, y no se podria añadir ni cambiar propiedas al objeto



// El metodo Object.fromEntries()
    // let student = [
    //  ["Jose", "Saavedra"],
    //  ["nation", "usa"]
    // ]
    //  let result = Object.fromEntries(student)
    //  console.log(result)


// El metodo Object.fromEntries() transforma un array de subarray en un objeto, los elementos que se encuentren en el subarray seran propiedad/valor en el objeto



// Metodo Object.getOwnPropertyNames()
    //  let obj = { 0: "a", 1: "b", 2: "c", 3: "d", f: 5, nation : "Spain"}
    //  let result = Object.getOwnPropertyNames(obj)
    //  console.log(result)


// El metodo Object.getOwnPropertyNames() nos retorna un array con todas las propiedas del objeto, excepto las que usan simbolo



// Metodo Object.hasOwn()
    //  let obj = { 0: "a", 1: "b", 2: "c", 3: "d", f: 5, nation : "Spain"}
    //  let result = Object.hasOwn(obj, "name")
    //  console.log(result)


// El metodo Object.hasOwn() determinar si cierta propiedad existe dentro del objeto, si existe devuleve true, si no devuelve false, recibe dos parametros el nombre del obeto donde se estan buscando, y la propiedad a buscar



// Metodo Object.hasOwnProperty()
    // const obj = {name: "Jose", surname: "Saavedra"}
    // let result = Object.hasOwnProperty("name")
    // console.log(result)

// EL metodo Object.hasOwnProperty devuelve un valor booleano dependiendo si cierta propiedad existe en el objeto, este metodo tambien se puede utilizar en los arrays


// Metodo Object.is()
    // let food = {1:"rice", 2:"chicken", 3:"rice", 4:"meat"}
    // let result = Object.is("rice", "chicken")
    // console.log(result)


// El metodo Object.is() determina si dos valores del objeto son iguales



// Metodo Object.isExtensible()
//     let obj = {}
//     //let result = Object.isExtensible(obj)
//     Object.freeze()
//     let result = Object.isExtensible(obj)
//    console.log(result)


// EL metodo Object.isExtensible() determina si al objeto se le pueden añadir nuevas propiedades, devuelve true o false dependiendo si se le pueden añadir o no



// Metodo Object.isFrozen()
    // let nation = {city:"Miami"}
    // Object.freeze(nation)
    // let result = Object.isFrozen(nation)
    // console.log(result)

// El metodo Object.isFrozen() determina si un objeto esta congelado o no



// Metodo Object.isSealed()
//    let nation = {city:"Miami"}
//    Object.seal(nation)
//    let result = Object.isSealed(nation)
//    console.log(result)

// El metodo Object.isSealed() determina si un objeto esta sellado o no, un objeto esta sellado si no es extensible y si todas sus propiedades no son configurables


// Metodo Object.keys()
    // let person = {name:'James', surname: 'Cameron', sport: "Baseball"}
    // let result = Object.keys(person)
    // console.log(result)

// EL metodo Object.keys() retorna un array con todas las propiedades del objeto



// Metodo Object.preventExtensions()
//    let human = {name: 'Jose'}
//     Object.preventExtensions(human)
//     human.surname = 'Saavedra'
//     console.log(human)

// El metodo Object.prevenExtensions() evita que se le añadan nuevas propiedades al objeto, marcaria el objeto como no extensible



// Metodo Object.propertyIsEnumerable()
//    let obj = {age: 18, ocupation: "Programation"}
//    let result = obj.propertyIsEnumerable("age")
//    console.log(result)

// EL metodo Object.propertyIsEnumerable() determina si una propiedad es enumerable



// Metodo Object.seal()
//    let obj = {age: 18, ocupation: "Programation"}
//    Object.seal(obj)
//    obj.name = 'Jose'
//    console.log(obj)

// El metodo Object.seal() sella un objeto, es decir evita las extensiones y hace que las propiedades del objeto ya no puedan ser configuradas ni añadir nuevas propiedades



// Metodo Object.values()
//    let nations = {usa: 'miami', chile: 'santiago', spain: 'madrid', france: 'paris'}
//    let result = Object.values(nations)
//    console.log(result)

// EL metodo Object.values() retorna un array con todos los valores de cada propiedad del array



// Metodo Object.getOwnPropertySymbols()
    //  let venezuela = Symbol('venezuela')
    //  let italy = Symbol("rome")
    //  let nations = {usa: 'miami', chile: 'santiago', spain: 'madrid', france: 'paris'}
    //  nations[venezuela] = 'caracas'
    //  nations[italy] = 'rome'
    //  let result = Object.getOwnPropertySymbols(nations)
    //  console.log(result)

// El metodo Object.getOwnPropertySymbols() retorna un array con las propiedades que tengan simbolo en el objeto



// Metodo Object.getOwnPropertyDescriptors()
    let nations = {usa: 'miami', chile: 'santiago', spain: 'madrid', france: 'paris'}
    Object.seal(nations)
    let result = Object.getOwnPropertyDescriptors(nations)
    console.log(result.usa.configurable)

// EL metodo Object.getOwnPropertyDescriptors() retorna true o false dependiendo si cierta propiedad se le puede modificar el valor o si se puede añadir una nueva propiedad al objeto


// Metodo Object.getOwnPropertyDescriptor()
//    let nations = {usa: 'miami', chile: 'santiago', spain: 'madrid', france: 'paris'}
//    let result = Object.getOwnPropertyDescriptor(nations, 'spain')
//    console.log(result.enumerable)

// EL metodo Object.getOwnPropertyDescriptor() devuelve true o false dependiendo si una propiedad de un objeto se le puede modificar su valor