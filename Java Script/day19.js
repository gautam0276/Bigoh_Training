// Ques 2

const areaOfRectange = (length, breadth) => {
  return length * breadth;
};

const areaOfSquare = (side) => {
  return side * side;
};

const temperature = (farenhiet) => {
  return ((farenhiet - 32) * 5) / 9;
};

const areaOfCircle = (r) => {
  return 3.14 * r * r;
};

const areaOfTraiangle = (base, height) => {
  return (1 / 2) * base * height;
};

const calculator = (func, arg) => {
  return func(...arg);
};

console.log(calculator(areaOfCircle, [4]));
console.log(calculator(areaOfSquare, [4]));
console.log(calculator(areaOfTraiangle, [2, 3]));

// Question 3

const addition = (...sum) => {
  return sum.reduce((acc, item) => acc + item, 0);
};
console.log(addition(5, 6, 2, 1));

// Question 4

const addition1 = (...sum) => {
  return sum.reduce((acc, item) => acc + item, 0);
};
console.log(addition(9, 6, 7, 3, 5, 756, 3, 4));

const subtract = (...sub) => {
  return sub.reduce((acc, item) => acc - item);
};
console.log(subtract(13, 5, 6));

const multi = (...multi) => {
  return multi.reduce((acc, item) => acc * item, 1);
};
console.log(multi(2, 3, 6, 2));
const divide = (...divide) => {
  return divide.reduce((acc, item) => acc / item);
};
console.log(divide(20, 2, 5, 2));
const modulus = (...modulus) => {
  return modulus.every((item) => item % 2 === 0);
};
console.log(modulus(20, 2));

// Ques 6

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


// const groupBy=Object.fromEntries(        for single object output
//   arr.map(item=>[item.batch_id,item])
// )
// console.log(groupBy)

const groupBy = arr.reduce((acc, item) => {
  if (!acc[item.batch_id]) {
    acc[item.batch_id] = [];
  }
  acc[item.batch_id].push(item);
  return acc;
}, {});

arr.forEach((obj) => {
  delete obj.batch_id;
});
console.log(groupBy);

// const groupitems=arr.reduce((acc,item)=>{
//   if(!acc[item.category]){
//     acc[item.category] = [];
//   }
//   acc[item.category].push(item)
//   return acc
// },{})

// console.log(groupBy)


// question 7 JSON manipulation 
let obj={
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

function newObject(obj){
  // for(const [key,value] of Object.entries(obj)) {

  for(let key in obj){
    const value=obj[key]

    if(typeof value === "object" && value !==null ){
      console.log(`${key}`)
      
      for(let nestedKey in value){
        console.log(`  ${key}.${nestedKey}: ${value[nestedKey]}`);
      }
        
    }
    else{
      console.log(`${key}: ${value}`);
    }

  }

}

newObject(obj)



// ques 8

obj= {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
}

// url: "https://localhost:400";
const queryString =new URLSearchParams(obj).toString();

const baseURL = "https://localhost:400";

const https= `${baseURL} ${queryString}`

console.log(https)


// question 9 
