// const backButton=document.getElementById("back")
// const countView=document.getElementById("countView")
// const nextButton=document.getElementById("next")
// const box=document.getElementById("boxes")

// let count=0

// function createNewBox(){
// box.nextButton

// }

// function refreshScreen(){
//     countView.innerText=count.toString()
// }

// function increaseNumber(){
//     count++
//     refreshScreen()
// }

// function decreaseNumber(){
//     count--
//     refreshScreen()
// }

// nextButton.addEventListener("click",increaseNumber)
// backButton.addEventListener("click",decreaseNumber)

// function mOver(obj) {
// //   alert("runningn");
//   obj.innerHTML = "Welcome";
// }

// function mOut(obj) {
// //   alert("runningn");
//   obj.innerHTML = "By";
// }


const modifySquare=document.getElementById("square")
function setColor(){
    modifySquare.style.backgroundColor="pink"
}

modifySquare.addEventListener("click" , setColor)


