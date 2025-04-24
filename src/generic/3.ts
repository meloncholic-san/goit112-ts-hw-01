// function merge (objA, objB) {
//     return Object.assign(objA, objB);
//   }


function merge <T = any, U = any>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}

const cat = {
    name: 'Meowka',
    age: "16 month"
  };
  
  const animal = {
    breed: 'cat',
    legs: 4
  };

  console.log(merge(cat,animal));