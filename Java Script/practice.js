/*
var value=4
console.log(value ** 0.5)

let firstName="     Gautam        Sharma      "
console.log(firstName[firstName.length-1])

console.log(firstName.length);
firstName=firstName.trim()
// console.log(firstName)
console.log(firstName.length)

// let updatedName = firstName.trim();
// console.log(updatedName)
// console.log(updatedName.length)

// let firstName="       gautam         "

// console.log(firstName.length)
//  firstName=firstName.trim()
// console.log(firstName.length);

firstName=firstName.toLocaleUpperCase()
console.log(firstName)
firstName="Jitender"
let lastName="Sharma"
console.log(firstName)
// firstName=firstName.slice(2,6/)
console.log(firstName)

let fullName = firstName+ " " +lastName;
console.log(fullName)
console.log(typeof fullName)

console.log(firstName+" "+lastName)

let firstNumber="20"
let secondNumber="25"

let number=firstNumber + secondNumber
console.log(number)
console.log(typeof number)

let newNumber = +firstNumber + +secondNumber;
console.log(newNumber)
console.log(typeof newNumber)

let num=22

if(num>=18){
    console.log("eligible ")
}
else{
    console.log("not eligible ")
}

let age=22
let drink

if(age>=18){
    drink="alcohol"
}
else{
    drink="milk"
}

console.log(drink)

age=20
drink=age>=18 ? "college student" : "school student"
console.log(drink)

// let winningNumber=18
// let userGuess= prompt("Guess a Number")
// alert("Your number is ")


let weekDayName=12

switch(weekDayName){
    case 1: 
    console.log("Monday")
    break
    case 2:
        console.log("Tuesday")
        break
        case 3:
            console.log("Wednesday")
            break
            case 3:
                console.log("Thrusday")
                break
                case 5:
                    console.log("Friday")
                    break
                    case 6:
                        console.log("Saturday")
                        break
                        case 7:
                            console.log("Sunday")
                            break
                            default:
                                console.log("error")
}
console.log(day)


let i=0; 


while(i<=5){
    console.log(i);
    i++;

}

let num1=10
let sum=0
let j=0
while(j<=num1){
    sum=sum+j
    j++
}
    console.log(sum)
*/

//     function sum(a,b){
//         let c=a+b
//         // console.log(c)
//         return c
//     }
// console.log(sum(3,2))

// console.log(2+"2")
// number + string. = string  if anyone one number string then whole output will be in string

// console.log(2+2)
//4 number + number = number

// console.log("2"+2)
//string + number  = string

// console.log(new User("gautam",1212))

// const obj={
//     name:"gautam",
//     id:2356,
//     company:"BigOh"
// }
// console.log(obj)

// function add(a,b){
// console.log(2+3)
// }
// add()

// function sum1(x,y){
//     return x+y
// }
// console.log(sum1(2,3))

// function getName(username){
// return `${username}abc`;
// }

// const Name = getName("Himanshu")

// console.log(Name.toUpperCase())

// function sum1(a,b){
//     // console.log(a+b);
//     return a+b
// }

// const gautam1 = sum1(2,3)

// console.log(typeof(gautam1))

// function getSum(a,...b){
//     return a+b
// }
// console.log(getSum(2,5))

// function spreadOperator(a,...b){
//     console.log(a)
//     console.log(b)
// }

// spreadOperator(2,[3,4])

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  // constructor is a function which is invoked/made when new keyword is used or a instance
  //of class is made

  encryptPassword() {
    return `abc${this.password}`;
  }

  getPassword() {
    return password;
  }
}

const gautam = new User("Gautam", 1212);

// console.log(gautam);










const mor={
    bird:"himanshu mor",
    fly :function(){
        console.log("flying")
    }
}



Object.prototype.sayGautam = function (name) {
    return `${name}Gautam is a Developer`;
};

console.log(mor)



const himanshu={
    username:"Himanshu",
    talk: function(){
        console.log("talking")
    }
}

console.log(himanshu)