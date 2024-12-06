
// agr m ek if codition hi daaltey h or vo hi true hogi to aagey statement read hi nhi kregi

const ageOfPerson=36;
if(ageOfPerson<=60){
    console.log("Not a Senior Citizen" , ageOfPerson);
}

// if else ( agr if ki condition true nhi hogi to automatically else print ho jyga)
const num=25;
if(num%2==0){
    console.log("even")
}
else{
    console.log("odd");
}

console.log(num);

// else if is used to execute multiple condition

const marks=76
if(marks>=80){
    console.log("Grade A")
}
else if(marks>=60){
    console.log("Grade B")
}
else if(marks>=40){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Ternary Opertor

let airbags=5
let ans
ans=airbags<=6 ? "safe" : "unsafe";
console.log(ans)


// switch statement

let month=3;
let name

switch(month){

    case 1 : 
    name="january"
     break
    case 2:
        name="february"
         break;
        case 3:
            name="march"
             break
            case 4:
                name="april"
                break
                default:
                    name="invalid"
                }
console.log(name)

// question

let number=2225
// let number=25

if(number%5===0){
    console.log( number, "multiple of 5")
}
else{
    console.log(number , "not a multiple of 5")
}
// console.log(number)


//  For Loop
let count=20
for(let i=1;i<=count;i++) 
    {
    console.log("BigOh Tech is a Startup Company")
}
console.log("loop has ended")

// print of sum of N numbers

let sum=0

for(let i=1;i<=5;i++){
    sum=sum+i
}
console.log(sum, "is the sum of 5")
console.log("loop has ended")

// while loop

let i=1;
while( i<=10){
    console.log ( "hey" , i );
    i++;
}


//  for-off loop (string count krta h means ki kitne alphabet h including spaces) 

var str="delhi dhaba is a good restraunt";
let size=0
for(let i of str){
    console.log("place for hungry people : ",i)
    size++
}
console.log("size of string = " , size)


// for-in loop (isme key or value do alag alag print krwa skte h )
// like only key bhi or address bhi 

let student ={
    name:"gautam",
    phno :1234567890,
    address:"Dwarka",
    company:"Bigoh",

};

//  for(let key in student){
//      console.log(student[key]);
//  }
console.log(student["name"])

// question

let b=100;

for(let i=1;i<=b;i++){
if(i%2===0){
    console.log("all even number is " , i)
}
else{
    console.log("")
}
}

// function defination k andr jo hota h vo parameter function hota h
// FUNCTION

 function plus(){
    console.log("we are learning about function")
 }
 plus();

 function myFunction(msg){
    console.log(msg)
 }

 myFunction()

//  add two umbers
function addition(x,y){
    console.log(x+y)

}
console.log(addition)

function multi(x,y){
    console.log(x*y)
}
console.log(multi)

// Arrow function
const arrowDivide=(a,b)=>{
    console.log(a/b);
}



let age = 22;
// let name = "ritesh";

// if (age>=18 && name=="ritesh"){
//     console.log("eligible for vote" )
// }
// else{
//     console.log("not eligible for vote")
// }

if (true) {
  console.log("okok");
}
let obje ={name:"ritesh",name2:"gautam"}
for (let i in obje) {
  console.log(obje[i]);
}

const valueArrow=(x,y)=>{
    console.log(x+y)
}






 const obj={
name0:"gautam",
company:"BigOh",
role:"development",


 }
console.log(obj)