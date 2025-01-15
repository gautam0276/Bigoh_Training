// call

// function greet(greetings,marks){
//     console.log(`${greetings} ${this.name} ${marks}`)
// }
// const person={name:"Gautam"}

// greet.call(person,"hello", "!" )

// apply    (function ko specific task k sath call krna isme arguments ko array k roop m pass krte h)

// function greet(greetings,marks){
//     console.log(`${greetings} ${this.name} ${marks}`)
// }
// const person={name:"Ritesh"}
// greet.apply(person,["hello","!"])

// bind (bind ka use hum function ko kisi specific value se bind krna k lie suse krte h)

// function greet(greetings,marks){
//     console.log(`${greetings} ${this.name} ${marks}`);
// }
// const person={name:"Ashish"}
// const bound=greet.bind(person,"by","!")
// bound()

// Map (map k data stucture h jo key-value pairs ko store krta h)
//(map ka use tab hota h jb kisi value ko unique key k sath store krna ho or value ko acces krna ho)

/*
set(key, value): Map mein ek new key-value pair add karta hai.
get(key): Kisi key ki corresponding value ko retrieve karta hai.
has(key): Check karta hai ki given key Map mein hai ya nahi.
delete(key): Kisi key-value pair ko Map se delete karta hai.
size: Map mein total number of key-value pairs ko return karta hai.
clear(): Map ke saare key-value pairs ko remove karta hai.


// let myMap=new Map()

// myMap.set("apple",3)
// myMap.set("mango", 2);
// myMap.set("pineapple", 1);
// myMap.set("kiwi",5)

// myMap.set("kiwi",11)

// myMap.clear()

// console.log(myMap.size)

// let myset=new Set()

// myset.add("hi")
// myset.add("by")
// myset.add("hiii")
// myset.add("by")

// console.log(myset)

// $(document).ready(function () {
//   $("#button").on("click", function onClick() {
//     console.log("You clicked the button");
//   });

//   console.log("Hi");

//   setTimeout(function timeOut() {
//     console.log("Click the button");
//   }, 5000);

//   console.log("Sync code is completed");
// });

console.log("hii");

setTimeout(function timeOut() {
  console.log("how are you");
}, 3000);

for(let i=0;i<2;i++){
    console.log("please come ",i)
}

setTimeout(function timeOut(){
    console.log("you are totally changed ")
},5000)

console.log("Gautam");

setTimeout(function timeOut(){
    console.log("welcome")
},2000)


*/

// Prototype

// const bird={
//     sparrow:"bird",
//     work:"Flying",
//     food:function eat(insects){
//         return insects
//     }
// }

// Object.prototype.birdsFunction=function(eat){
//     return `${eat} is national bird`
// }

// console.log(bird)
/*
// Dender Proto
let obj1 = {
  name: "Gautam",
  getName: function () {
    return this.name;
  },
};

let obj2 = {
  state: "New Delhi",
  age: "34",
  ritesh: obj1,
  // company:"BigOh"
};

let obj3 = {
  name: "rahul",
  location: "BigohTech",
  ritesh: obj2,
};
console.log(obj3);

*/

// prototype other objects ko apni properties or method inherit krnen ka mechanism provide krta h

// const data={
//     fName:"Gauatm",
//     lname:"Sharma",
//     getFullName(){
//         return `${this.fName} ${this.lname}`;
//     }
// }
// const newData=Object.create(data)
// console.log(data)
// // console.log(newData.fname)
// console.log(newData.fName)




// let str="a quick brown fox jumps right over the lazy dog"
// // count each character
// // find the unique character in the string

// // const myMap=new Map()
// const myset=new Set()
// for(let i=0;i<str;i++){
//  myset.add(str)
// }
// console.log(myset)
// // mymap.foreach((str)=>{str.filter(()=>{
// //     if(str===character){
        
// //     }
// // })
    
// // })


let str = "a quick brown fox jumps right over the lazy dog";

// let charCount={}


// for(let char of str){
//     if(char!==""){

//         charCount[char] = (charCount[char] || 0) + 1;
//     }
// }

// for(let char in charCount){
//     console.log(`Count of ${char} : ${charCount[char]}`);
// }



let charCount={}

for(let char of str){
    if(char!==""){
        charCount[char]=(charCount[char] || 0)+1
        
    }
    

}

// uniqueChar=[]
// for(let char in charCount){
//     if(charCount[char]==1){
//         charCount.push(uniqueChar
        
//     }
// }
