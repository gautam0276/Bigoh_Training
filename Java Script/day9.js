// const jsonString = `
// {
//   "name": "Alice",
//   "age": 30,
//   "address": {
//     "city": "New York",
//     "zipcode": "10001"
//   },
//   "hobbies": ["reading", "swimming", "coding"]
// }`;

// const person = JSON.parse(jsonString);

// // Accessing properties
// console.log(person.name);  // Output: Alice
// console.log(person.address.city);  // Output: New York

// // Modifying properties
// person.age = 31;
// person.address.city = "Los Angeles";
// person.hobbies.push("traveling");

// // Removing a property
// delete person.address.zipcode;

// // Converting back to JSON
// const updatedJsonString = JSON.stringify(person, null, 1);
// console.log(updatedJsonString);





// const jsonString= `{

// "name":"gautam",
// "development":{
// "training":"DSA",
// "mentor":"ritesh"
// },
// "company":"BigOh Tech",
// "salary":123456,
// "employeeName":["ritesh","shivendra","Arun"]

// }`

// const data=JSON.parse(jsonString)

// console.log(data)
// data.employeeName.push("Rahul")
// data.development.training="Java Script"
// data.employeeName.push("Gautam")
// delete(data.salary)
// console.log(data)

// const updatedString=JSON.stringify(data,1)
// console.log(updatedString)






// function name(name){
//     return promise= new Promise((resolve,reject)=>{
//     if("G"==name.charAt(0))
//     {
//         resolve("resolve error")
//     }
//     else
//     {
//         reject("reject error")
//     }
//     })
    
//     }
    
//     name("Gautam").then((data)=>{
//     console.log(data)
//     })
//     .catch((data)=>{
//         console.log(data)
//     })



// function fetchDataSuccessfully(){
//     console.log("fetching Data")
//     return promise = new Promise((resolve,reject)=>{
//         try
//         {
//             setTimeout(()=>{
//                 // resolve("Data fetched Successfully")
//                 throw Error("not workingg")
//             },3000)
//         }
//             catch
//             {
//                 setTimeout(()=>{
//                     reject("Data fetch failed")
//                 },2000)
//             }
        
            
        
//     })
// }

// fetchDataSuccessfully("Data fetched Successfully").then((data)=>{
// console.log(data)
// })
// .catch((data)=>{
// console.log(data)
// })


// function steps(){
//     return promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Step 1 completed")
//             resolve("step 1 completed")
//         },1000)
//     setTimeout(()=>{
//         console.log("step 2 completed")
//         resolve("step 2 completed"
//         )
//     },1000)    
//     setTimeout(()=>{
//         console.log("step 3 completed")
//         resolve("step 3 completed")
//     },1000)
//     })

// }

// steps()




// function steps1(data){
//     return promise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("step 1 completed")
//         },1000)

//     })
// }


// function steps2(){
//     return promise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("step 2 completed")
//         },2000)
        
//     })
// }

// function steps3(){
//     return promise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("step 3 completed")
//         },3000)
        
//     })
// }
// async function stop(){
//     const a = await steps1()
//     console.log("nextLine")
//     console.log(a);

    
//     const b=await steps2()
//     console.log("nextLine")
//     console.log(b);

    
//     const c=await steps3()
//     console.log("lastLine")
//     console.log(c);


// }



// stop()







function steps3(){
    return promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 3 completed")
        },3000)
        
    })
}

function steps1(){
    return promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 1 completed")
        },1000)

    })
}


function steps2(){
    return promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 2 completed")
        },2000)
        
    })
}
async function stop(){
    
    const c= steps3()
    // console.log("lastLine")
    console.log();

    const a =  steps1()
    // console.log("nextLine")
    console.log(a);

    
    const b= steps2()
    // console.log("nextLine")
    console.log(b);


}



stop()