/*

let nameObj = {
  name: "Tony",
}

let PrintName = {
  name: "steve",
  sayHi: function () {
    // Here "this" points to nameObj
    console.log(this.name)
  },
}

let HiFun = PrintName.sayHi.bind(nameObj)
HiFun()


// call

let name={
    name:"Gautam"
}

let printName={
    name:"ritesh",
    sayHiii: function(age){
        console.log(`${this.name}  age is  ${age}`)
    }
}

printName.sayHiii.call(name,22)

//  apply

let name1 = {
  name: "Gautam",
};

let printName1 = {
  name: "ritesh",
  sayHiii: function (age) {
    console.log(`${this.name}  age is  ${age}`);
  },
};

printName.sayHiii.apply(name,[22]);

// call

// let person={
//     name:"gautam",
//     age:"23"
// }

// function data(age){
//     console.log(`${this.name} is ${age} years old`);
// }

// data.call(name,age)



//  MAP 

let map=new Map()

map.set("name","Ashi")
map.set(22,"twenty")
map.set(true,"boolean key")

console.log(map.get("name"))
console.log(map.get(22));


// set   (it won't repeat values ,it stores unique values)
let set=new Set()
set.add("gautam")
set.add("sharma")
set.add("gautam")

console.log(set)

console.log(set.has("ritesh")) // has ka use boolean values k lie hota h
set.delete("sharma")



console.log(set)
set.clear()
console.log(set)


// size (ye line ka size batata h ki kine baar add use kia gya code ki line m)
let number=new Set()

number.add("gautam")
number.add("sharma");
// number.add("ritesh");
number.add("verma");
console.log(number.size)


// set time out jo web api ki hep se debouncing ki jati h

*/

// Debouncing

// document.addEventListener("DOMContentLoaded", function () {
//   function debounce(func, delay) {
//     let timer;

//     return function (...args) {
//       clearTimeout(timer);

//       timer = setTimeout(() => {
//         func.apply(this, args);
//       }, delay);
//     };
//   }

//   function searchQuery() {
//     const query = document.getElementById("searchBox").value;
//     console.log("searching for:", query);
//   }

//   const debouncedSearch = debounce(searchQuery, 500);
//   const searchBox = document.getElementById("searchBox");

//   if (searchBox) {
//     searchBox.addEventListener("input", debouncedSearch);
//   } else {
//     console.error("Element with ID 'searchBox' not found.");
//   }
// });



// const inputField = document.getElementById("inputField");
// const submitButton = document.getElementById("submitButton");
// inputField.addEventListener("input", function () {
//   console.log("user is typing:", inputField.value);
// });
// submitButton.addEventListener("click", function () {
//   alert("form Submitted");
// });

// // Debouncing Syntax // //

function debounce(func, delay){
    let timer

    return function(...args){

        clearTimeout(timer)

        timer=setTimeout(()=>{
            func.apply(this,args)
        },delay)

    }
}


function searchData(event){

    const pressButton=event.target.value
    document.getElementById("searchResult").innerText=`searching for:${pressButton}`
    const debouncedSearch=debounce(searchData,500)

    document.getElementById("searchBox").addEventListener("input",debouncedSearch)
}




// let data={
//     name:"gautam"
// }
// let printData={
//     name:"ritesh",
//     sayHi:function(){
//         console.log(this.name)
//     }
// }

// const updatedData=printData.sayHi.bind("fghjk")
// updatedData()

let name="ritesh"

function names(name){

  return name
}
let bound=names.bind("tyuio")
console.log(bound("jkfgh"))