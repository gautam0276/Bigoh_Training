// async function getData(){
//     setTimeout(function () {
//         console.log("i am inside set Timeout block")
//     } , 5000)
// }
// const output=getData()

// function printName(){
//     console.log("hello")
// }

// setTimeout( printName,3000)

// function getName(nameID){
//     setTimeout(()=>{
//         console.log("hello", nameID)

//     },2000)

// }

// console.log("first line of code")

// function printName(name){
// console.log("second line of code "+name)
// }
// printName("end")

// Call Back

// function printName(name){
//     console.log("Hello "+name)
// }

// function newPrintName(callback){
//     let name="john"
//     callback (name)

// }

// newPrintName(printName)

// let promise = new Promise(function(resolve, reject){
//     alert("Stop here")

// })

// console.log("race start")

// setTimeout( function delay(){
//     console.log("race end")
// } , 2000)

// console.log("half of race is covered")

// let promise= new Promise((resolve, reject)=>{

//     let success=true

//     if(success){
//         resolve("pass")
//     }
//     else{
//         console.log("fail")
//     }
// })
// alert ("stop here")

// promise
// .then((result)=>{
// console.log(result)
// })
// .catch((error)=>{
// console.log(error)
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("hi  I am promise")
//     setTimeout(()=>{
//         console.log("I am a promise and i am fullfill")
//         resolve(true)

//     }, 3000)
// })

// let promise1 = new Promise((resolve,reject)=>{
//     console.log("hi  I am promise")
//     setTimeout(()=>{
//         console.log("I am a promise and i am fullfill")
//         reject(new Error)

//     }, 3000)
// })
// console.log(promise,promise1)

// promise.then((value)=>{
// console.log(value)
// })
// promise1.catch((value)=>{
// console.log()
// })

// async function hello(){
//     console.log("hello")
// }

// async function name(){
//     setTimeout(()=>{
//         console.log( " hello team")
//     },2000)
// }
// async function name1(){
//     setTimeout(()=>{
//         console.log(" Good Morning ")
//     },3000)
// }

// name()
// name1()

// async function getData(age) {
//   return (promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age > 18) resolve("You are men");
//       else reject("Your are women");
//     }, 5000);
//   }));
// }
// async function name1(age){
//     return promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("gautam")
//         },4000)
//     })

// }

// function execute() {
// getData(5).then((data)=>{
//     console.log(data)

// }).catch((err)=>{
//     console.log(err)

// })

// }

// execute();



    function name(callback){
        setTimeout(()=>{
            console.log("hello")
            callback()
    
        },2000)
    }

    function name1(callback){
        setTimeout(()=>{
            console.log("Kunal")
            callback()
    
        },2000)
    }

    function name2(callback){
        setTimeout(()=>{
            console.log("Welcome to Delhi")
            callback()
    
        },2000)
    }


for(let i=1;i<=5;i++){
    name(function(){
        name1(function(){
            name2(function(){
            setTimeout(()=>{
                console.log( "Let's enjoy the Trip ")
            }, 2000)  
                
            })
        })
    })
}
    
    