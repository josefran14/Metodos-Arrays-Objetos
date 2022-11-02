//Realice una funcion que reciba dos arrays y retorne un objeto donde las key sean las propiedades del
//primer array y las values del segundo array

// ejemplo:
// arrKeys = ['a','b','c','d']
// arrValues = [1,2,3,4]

const input = (arrKeys, arrValues) => {
  let resultado = {}
      arrValues.map((item,index) => {
        resultado [arrKeys[index]] = arrValues[index]
        //   arrKeys.forEach((element,index) => {
              
        // })
    })
  return resultado
};

console.log(input(["a", "b", "c", "d","e"], [1, 2, 3, 4, 5]))
//   for(const [index,item] of arrKeys.entries()){
//      let val =  [item]
//      for(const [index,item] of arrValues.entries()){
//          resultado [val] = item
//      }
//   }
