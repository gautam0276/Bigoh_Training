function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b == 0;
    default:
      return error;
  }
}
console.log(calculate(2, 3, "%"));
console.log(calculate(4, 3, "+"));
console.log(calculate(5, 3, "*"));
console.log(calculate(6, 3, "/"));
console.log(calculate(7, 3, "-"));

// ques 6

let arr = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

const array=[]
arr.forEach((element) => {
  const { batch_id, ...rest } = element;
  const obj = {};
  if (obj[batch_id]) {
    obj[batch_id].push(rest);
  } else {
    obj[batch_id] = [rest];
  }
  array.push(obj)
});

console.log([array]);

// for(let obj in obj){
//     console.log()
// }







// const newObject={}
// arr.forEach((key)=>{
// })

// arr.forEach((obj)=>{
//     delete obj.batch_id;
// })
// console.log()




// Ques 8

obj1={
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three"
}

// url:"https://localhost:400",



const queryString= new URLSearchParams(obj1).toString()

const baseURL = "https://localhost:400";

const https=`${baseURL} ${queryString}`

console.log(https)




// Ques 7

obj2={
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
}


function mergeObject(key){
for(let key in Object){
}
}
console.log()
