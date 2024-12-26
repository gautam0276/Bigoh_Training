// const backButton = document.getElementById("back");
// const nextButton = document.getElementById("next");
// const countView = document.getElementById("countView");

// let count = 0;

// function refreshScreen() {
//   countView.innerHTML = count.toString();
// }

// function decrementCount() {
//     if(count>0)
//   count--;
//   refreshScreen();
// }

// function incrementCount() {
//   count++;
//   refreshScreen();
// }

// nextButton.addEventListener("click", incrementCount);
// backButton.addEventListener("click", decrementCount);
// refreshScreen();

const circle = document.getElementById("modifyCircle");
function setColor() {
  circle.style.backgroundColor = "yellow";
}
const circles=document.getElementsByClassName("cardsDummy")
function changeColor() {
  circle.id = "cardsDummy";
}
circle.addEventListener("click", setColor);
circle.addEventListener("click", changeColor);




// const circles=document.getElementsByClassName("cardsDummy")
// function changeColor() {
//   circles.style.changeColor = "changeColor";
// }
// circle.addEventListener("click", setColor);
// circle.addEventListener("click", circle);