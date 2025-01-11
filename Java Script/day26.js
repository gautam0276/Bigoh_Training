// let n = 3;
// let num = 1;
// for (let i = 1; i <= n; i++) {
//   // console.log()
//     console.log(num);

//   for (let j = 0; j < n; j++) {
//   }
// }

// let newArr = [];

// for (let i = 0; i < arr.length; i = i + 3) {
    //   newArr.push(arr.slice(i, i + 3));
//   console.log();
// }
// // newArr[0].pop()
// console.log(newArr);
let arr = [
  [8, 6, 3],
  [5, 7, 4],
  [1, 2, 5],
]

function rotateMatrix(arr=[]){
    const n=arr.length
    
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            
            let temp=arr[i][j]
            arr[i][j]=arr[j][i]
            arr[j][i]=temp
            
            
        }
        arr[i].reverse();
    }
    
}

rotateMatrix(arr)
console.log(arr)