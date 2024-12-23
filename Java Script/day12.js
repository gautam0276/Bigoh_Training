// const data={
//     name:"mohit",
//     age:22,
//     address:"Dwarka",
//     education:"graduate"
// }

// const details=Object.keys(data)
// console.log(details)

// const values=Object.values(data)
// console.log(values)

// const entries=Object.entries(data)
// console.log(entries)


// const data1={
//     city:"New Delhi",
//     isEmployed:"True"
// }
// data1.houseNo=50

// const saveData=Object.freeze(data1)
// console.log(saveData)
// data1.city="Mathura"

// const merge=Object.assign({},data,data1)
// console.log(merge)

// const newObj={
//     namee:"raghav",
//     class:4,
//     mentor:"Ritesh",
//     number:123465
// }

// newObj.state="U.P"

// const seal=Object.seal(newObj)
// newObj.class=5


// newObj.city="Mathura"
// console.log(seal)


// Skip this topic now 

// const daata={
//     fun:()=>{
//         console.log(`BigOh tech employee`)
//     }
// }
// // daata.fun()

// const print=Object.create({name:"ghjk"})
// console.log(print)



// const details={
//       name:"Himanshu",
//       city:"new delhi",
//     pincode:112233
// }

// console.log(details.hasOwnProperty("pincode"))

// const print=Object.getPrototypeOf(details)
// console.log(print)


// const entry=Object.entries(details)
// console.log(entry)

// console.log(Object.is())




                    // String 

// const str=" Gautam Sharma "
// console.log(str.length)
// console.log(str.charAt(3))
// console.log(str.charCodeAt(2))
// console.log(str.indexOf("utam"))
// console.log(str.lastIndexOf("Sharma"))
// console.log(str.slice(8,12))
// console.log(str.substring(0,6))
// console.log(str.substr(6,7))
// console.log(str.toUpperCase("Gautam Sharma"))
// console.log(str.toLowerCase("Gautam Sharma"))
// console.log(str.trim()) //extra spaces ko remove krta h
// console.log(str.replace("Gautam","Ritesh"))

// const string=" bikaner sweets bikaner sweets"
// console.log(string.replaceAll("bikaner", "Grover"))
// console.log(string.split(" "))
// console.log(str.concat(string))
// console.log(string.includes("bikaner"))
// console.log(string.includes("Hira Sweets"))
// console.log(string.startsWith("bikaner"))
// console.log(string.endsWith("sweets"))
// console.log(string.padStart(1000,"*"))
// console.log(string.padEnd(40,"*"))
// console.log(str.repeat(2))
// console.log(str.codePointAt(6))


// let arr=[1,2,3,4,5]
// let newArr=arr.slice(1,3)
// console.log(newArr)
// arr.splice(2,1,5)
// let arr1=arr.concat(newArr)
// console.log(arr1)
// console.log(arr)

// let newArr=arr.reduce((accumulator,currentValue)=>{
// return accumulator*currentValue
// },1)
// console.log(newArr)


// function printData(people){
//     return people
//     .filter(person=>person.age>=18)
//     .sort((a,b)=>a.age-b.age)
//     .map(person=>`${person.name}: ${person.age}`) 
// }

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'Dave', age: 16 }
//   ];
//   console.log(printData(people))


// function printData(details){
// return details
// .filter((details) => details.score>=50)
// .sort((a,b)=>b.score-a.score)
// .map(details=>`${details.name} scored good marks ${details.score}`)
// .map(str=>str.toUpperCase())
// }

// const details=[
//     {name:"gaurav", score:83},
//     {name:"shiv",score:56  },
//     {name:"anisha",score:77}
// ]

// console.log(printData(details))




// const student=[
//     {firstname:"Gautam", lastname:"Sharma"},
//     {firstname:"Ritesh", lastname:"Verma"},
//     {firstname:"Arun", lastname:"Kumar"}
// ]

// function printData(student){
//     return student
    
//     .map(student=>`${student.firstname} ${student.lastname}`) 
//     .filter(name=>name.length>=10)
//     .sort(())
    

//  }

// console.log(printData(student))











let obj=[{
    name:"Ritesh Verma kumar",
    address:{
        street:"noida sec-2",
        name:"noida",
        city:"Noida",
        pincode:"123456"
    },
    age:12
},{
    name:"             yash Verma",
    address:{
        street:"       noida sec-2",
        name:"      delhi",
        city:"MP",
        pincode:"56432"
    },
    age:12
},{
    name:"       singh gautam Verma       ",
    address:{
        street:"noida sec-2",
        name:"Mathura",
        city:"UP",
        pincode:"98765"
    },
    age:12
}]


obj.map((item)=>item)

const values=Object.values(obj[0].address)
console.log(values)

// const newValue=Object.values



// output:

// [{
//     firstName:"Ritesh"0
//         address:"noida sec-2,Mathura,UP,98765"
// },{
//     firstName:"yash"
//     address:"noida sec-2,Mathura,UP,98765"

// },{
//     firstName:"singh"
//     address:"noida sec-2,Mathura,UP,98765"
//     },
// }]






