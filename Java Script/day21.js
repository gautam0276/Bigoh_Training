var expected = {
  foo: {
    name: "ghh",
  },
  doo: 6,
};
var actual = {
  foo: {
    name: "ghh",
  },
  doo: 6,
};

// function compareObjects(expected, actual) {

//     for(let key in expected){
//         if(expected[key]===actual[key]){
//             console.log("passed")
//             return "passed"
//         }
//         // else if(expected[key]!==actual[key]){
//         //     console.log(`Failed Expecetd ${expected} , but got ${actual}`)
//         //     return `Failed Expecetd ${expected} , but got ${actual}`;
//         // }
//         // else{
//         //     console.log("error")
//         //     return "error"
//         // }
//     }
//     for(let key in actual){
//         if(expected[key]!==actual[key]){
//         console.log(`Failed Expecetd ${expected} , but got ${actual}`)
//         return `Failed Expecetd ${expected} , but got ${actual}`;        }

//     }

//   }

// compareObjects(expected,actual)

// function compareObjects(expected, actual) {

//     for(let value in expected){
//         if (expected[value] === actual[value]) {
//           console.log("passed");
//           return "passed";
//         } else if (expected[value] !== actual[value]) {
//           console.log(`Failed Expecetd ${expected} , but got ${actual}`);
//           return `Failed Expecetd ${expected} , but got ${actual}`;
//         } else {
//           console.log("error");
//           return "error";
//         }
//     }
//     for(let key in actual){
//         if (expected[value] !== actual[value]) {
//           console.log(`Failed Expecetd ${expected} , but got ${actual}`);
//           return `Failed Expecetd ${expected} , but got ${actual}`;
//         }

//     }

//   }

// compareObjects(expected,actual)

function compareObjects(expected, actual) {

  for (let key in expected) {
    if (expected[key] !== actual[key]) return false;
    else if (typeof expected[key] !== typeof actual[key]) {
      return false;
    } else if (
      typeof expected[key] === "object" &&
      typeof actual[key] === "object"
    ) {
      if(!compareObjects(expected[key], actual[key])){
       return false
    }
}
  }

  for (let key in actual) {
    if (!(key in expected)) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects(expected, actual))

//  Ques 6 

const areaOfSquare1 = (side) => {
  return side * side;
};

const calculator1 = (func, arg) => {
  return func(...arg);
};
const areaOfTriangle1=(base ,height){
  return 1/2*base*height
}

console.log(calculator1(areaOfSquare, [6]));
console.log(calculator1(areaOfTriangle1, [2, 3]));