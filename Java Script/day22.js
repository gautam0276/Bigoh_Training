/*
// arr= ([1, [2, [3, 4]], 5])

function sumNestedArray(arr) {
  if (typeof arr === "number") {
    return arr;
  }
  return arr.reduce((acc, item) => acc + sumNestedArray(item), 0);  
}

console.log(sumNestedArray([1, [2, [3, 4]], 5]));

// Ques 7

let obj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
    },
  },
};

// function mergeObject(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       //   console.log(`${key}`);

//       for (let nestedKey in obj[key]) {
//         // console.log(`${key}:${nestedKey}:${obj[key][nestedKey]}`);
//       }
//     } else {
//       //   console.log(`${[key]}:${obj[key]}`);
//     }
//   }
//   return mergeObject(obj);
// }

// mergeObject(obj);

function mergeObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}:${obj[key]}`)
    }

    
   else{
        console.log(`${key}:${obj[key]}`);
    }
}
for(let nestedKey in obj[key]){
    if(typeof obj[key]==="object"){
        console.log(`${obj[key]}.${obj[nestedKey][key]}`)
    }
}
// return mergeObject();

}

console.log(mergeObject(obj));



*/

// Ques 13

const obj1={
    name:"Gautam",
    age:23,
    company:"BigoTech",
    address:{
        city:"New Delhi",
        landmark:"Dwarka"
    }
}

//  json.parse(json.stringify) ka use object ko clone krne k lie use hota h
// const newObj = JSON.parse(JSON.stringify(obj1));
// obj1.name="sushant"

// console.log(obj1)
// console.log(newObj)

const newObj={...obj1}

obj1.company="HCL"

console.log(obj1)
console.log(newObj)
// const newObj=obj1.slice(0)
// console.log(obj1)
// console.log(newObj);





