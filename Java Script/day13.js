// let date=new Date(2024,3,12,5,4)
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(date.toString())
// console.log(date.toDateString())

// const getDate=new Date(2024,2,19)
// console.log(getDate.getMonth()+1)

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// let data= newData(myTimeStamp)
 





const date=new Date("August 19,95 20:52:22")
console.log(date.getTime())







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


console.log(obj.map((item)=>{

    return{
        
        finalString:`${item.name.trim().split(" ").pop()},${item.address.street.trim()},${item.address.name.trim()},${item.address.city},${item.address.pincode}`
    }
}))


// console.log(obj.map((item)=>{
//     return {
//         firstName:item.name.trim().split(" ")[0],
//         completeAddress:`${item.address.street.trim()}, ${item.address.name.trim()}, ${item.address.city.trim()}, ${item.address.pincode.trim()}` 
//     }
// }))



// console.log(obj[0].name,obj[1].name.trim(),obj[2].name.trim())



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