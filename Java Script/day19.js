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
  console.log(sum)
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

function newObject(obj) {
  // for(const [key,value] of Object.entries(obj)) {

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      console.log(`${key}`);

      for (let nestedKey in value) {
        console.log(`  ${key}.${nestedKey}: ${value[nestedKey]}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
    
  }
}

newObject(obj);

// ques 8

obj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
};


// url: "https://localhost:400";
const queryString = new URLSearchParams(obj).toString();

const baseURL = "https://localhost:400";

const https = `${baseURL} ${queryString}`;

console.log(https);


// question 11

var expected = { foo: 5, bar: 6 };
var actual = { foo: 8, bar: 6 };

// compare
function compareObjects(expected, actual) {
  for (let key in expected) {
    if (expected[key] !== actual[key]) {
      console.log(
        `Failed:ecpected ${key}  and values is ${expected[key]} and  ${actual[key]}`
      );
      return false;
    }
    for (let key in actual) {
      if (expected[key] !== actual[key]) {
        console.log(`${key} and values ${expected[key]} and ${actual[key]}`);
      }
    }
    console.log("Passed");
    return pass;
  }
}
compareObjects(expected, actual);

// Ques 5 Nested Array
const array = [[1, [4, [3, 4]], 5]];

function sumNestedArray(arr2) {
  if (typeof arr2 === "number") {
    return arr2;
  }

  return arr2.reduce((acc, item) => acc + sumNestedArray(item), 0);
}
console.log(sumNestedArray([[1, [2, [4, [4, 6], 4]], 5]]));

// const sum=array.reduce((acc,current)=>{
//   const newArr=current.flat(Infinity)
//   // return acc+newArr=current.flat(Infinity)
//   return acc + newArr.reduce((sum, item) => sum + item, 0);
// },0)
// console.log(sum)

// ques 13

const obj1 = {
  name: "Gautam",
  age: 24,
  company: "BigOhTech",
  address: {
    location: "Dwarka",
    landmark: "NSUT college",
  },
};

const clone = JSON.parse(JSON.stringify(obj1));
const stucturedClone = structuredClone(obj1);

console.log(clone);
console.log(stucturedClone);

// Ques 7



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

// ques 1

// Basic approach
// function solveEquation(equation){
// return [ 1+(2+3)*4-10/2 ]
// }
// console.log(solveEquation())

function solveEquation(equation) {
  try {
    return eval(equation);
  } catch (error) {
    return "Invalid equation";
  }
}

const equation = [1 + (2 + 3) * 4 - 10 / 2];
console.log(solveEquation(equation));

// Ques 7

function numbers(a, b) {
  if (a === undefined || b === undefined) {
    return "error ";
  }

  if (a < 0 || b < 0) {
    return "error ";
  }

  if (a === 0 || b === 0) {
    return "error";
  }
  return a + b;
}

console.log(numbers(5, 10));
console.log(numbers(5, -10));
console.log(numbers(0, 10));

// Ques JSON Challange     (INCOMPLETE ANSWER)

//   employees= [
//     {
//       "employee_id": "E001",
//       "name": "John Doe",
//       "role": "Developer"
//     },
//     {
//       "employee_id": "E002",
//       "name": "Jane Smith",
//       "role": "Designer"
//     },
//     {
//       "employee_id": "E003",
//       "name": "Emily Davis",
//       "role": "Project Manager"
//     }
//   ]

// // *Projects:*

// projects= [
//     {
//       "project_id": "P001",
//       "name": "Project Alpha",
//       "hours": [
//         { "employee_id": "E001", "hours_worked": 120 },
//         { "employee_id": "E002", "hours_worked": 80 }
//       ],
//       "rating": 4.5
//     },
//     {
//       "project_id": "P002",
//       "name": "Project Beta",
//       "hours": [
//         { "employee_id": "E001", "hours_worked": 150 },
//         { "employee_id": "E003", "hours_worked": 200 }
//       ],
//       "rating": 4.7
//     },
//     {
//       "project_id": "P003",
//       "name": "Project Gamma",
//       "hours": [
//         { "employee_id": "E002", "hours_worked": 50 },
//         { "employee_id": "E003", "hours_worked": 60 }
//       ],
//       "rating": 4.0
//     }
//   ]

//   const mergeArray=[...employees,...projects]
//   console.log(mergeArray)

//   const

// DATA TABLE

// function createCompanyStucture(data){
// return{
//   company:data
// }
// }

// function manageCompany(jsonobject,operation , departmentName , employee){
//   const department =jsonobject
//   .company.find(d=>d.name===department){
//     if(!department) return
//     switch (operation){
//       case "add":
//         department.employee.push(employee)
//         break
//     }
//   }
// }



function calculate(a,b){
return a,b
}

switch(calculate){
case "+":
  console.log("a+b")
  break
  case "-": 
  console.log("a-b")
  break
  case "*":
    console.log("a*b")
    break
    case "/":
      console.log("a/b")
      break
      default:
        console.log("error")
        break
}

console.log(calculate(2,5))





var expected = { foo: 5, bar: 6 };
var actual = { foo: 8, bar: 6 };

function compareObjects(expected,actual){
 
  for(let key in expected){
    if(expected[key] !== actual[key])
      console.log("fail")
  }
  else if(expected[key]===actual[key]){
    console.log("pass")
  }
else{
  console.log("error")
}

}

compareObjects()