const cards = document.querySelectorAll(".card")

// cards.forEach((card) => {
//   card.addEventListener("click", function () {
//     alert("Please Wait")
//   })
//

// card--> id-->product.id

async function getData() {
  const apiData = await fetch("https://dummyjson.com/products");
  return apiData;
}

fetch("https://dummyjson.com/products")
  .then((data) => {
    data.json().then((data) => {
        console.log(data);
      data.products.forEach((product,index) => {
        console.log(` title: ${product.title}`);
        console.log(` category: ${product.category}`);
        console.log(` Price: ${product.price}`)
        console.log(` rating: ${product.rating}`);
        console.log(` image : ${product.image}`);
        
        const card=cards[index]

        const details = document.createElement("div");

        const image=document.createElement(`img`)
        // if(image){
        image.src=product.images
        image.alt = product.title;
        image.width=160
        image.height=110
        // }

        const title=document.createElement("div")
        title.textContent=`Title: ${product.title}`
        
        const category = document.createElement("div");
        category.textContent=`category: ${product.category}`

        const price = document.createElement("div");
        price.textContent = `price: ${product.price}`;

        const rating = document.createElement("div");
        rating.textContent = `rating: ${product.rating}`;


        
        details.appendChild(image)
        details.appendChild(title)
        details.appendChild(category);
        details.appendChild(price);
        details.appendChild(rating);

        // console.log(details,cards[0]);

        card.append(details)
        

      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

   
//   const details=document.createElement()
//   const newCard=document.createTextNode()

// //   details.appendChild(newCard)
// //   document.body.appendChild(details)


// get element by id se image uthali
// uske attribute m src m 
