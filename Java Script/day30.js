let str = "a quick brown fox jumps right over the lazy dog";

// let charCount={}
// let myset=new Set()
// for(let char of str){
//     myset.add(char)
// }
// console.log(myset);


let charCount={}

let myMap=new Map()
for(let char of str){
if(myMap.has(char)){
    myMap.set(char, myMap.get(char)+1)
}
else{
    myMap.set(char,1)
}

//   myMap.set(char)
}
console.log(myMap)

