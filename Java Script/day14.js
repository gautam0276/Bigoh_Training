// async function getData(){
//     const apiData=await fetch('https://dummyjson.com/products')
//         return apiData
//     }

// fetch('https://dummyjson.com/products').then((data)=>{console.log(data)}).catch((error)=>{
//         console.log(error)
//     })


//  **IMPORTANT** 

// async function getProducts(){

//     const data=await fetch('https://dummyjson.com/products')
//     const updateData = await (data.json())
//     console.log(updateData.products)
    
//     const obj=updateData.products
//     const result=obj.map((product)=>{
//         // console.log(product);
//         return{
//             title:product.title,
//             images:product.images
//         }
//     })
//     console.log(result);

// }
// getProducts()





