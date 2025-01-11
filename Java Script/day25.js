// Ques 12

// function totalNumberOfWays(arr,target,index ,sum=0, count){
//     if(sum===target){
//         count++
//     }

//     const values=totalNumberOfWays(arr,target,index+1,sum,count)

//     console.log(sum)

// }
// const arr=[-1,9,8,-3,4]
// const target=5
// totalNumberOfWays()

// Ques 10 MINIMUM NUMBER OF WAYS

/*

function numOfWays(brackets) {
  if (brackets.length % 2 !== 0) {
    retrun - 1;
  }

  let openBracket = 0;
  let closeBracket = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "{") {
      openBracket++;
    } else {
      if (openBracket > 0) {
        openBracket--;
      } else {
        closeBracket++;
      }
    }
  }

  return Math.ceil(openBracket / 2) + Math.ceil(closeBracket / 2);
}

console.log(numOfWays("}{{}}{"));


// Ques 18      PROMISE IMPLEMENTATION


class MyPromise {
  constructor(studentName,studentAge) {
    
    this.studentName=studentName
    this.studentAge=studentAge
}
      setName(studentName){
          this.studentName = studentName;
        }
        setAge(studentAge){
            this.studentAge = studentAge;
        }
        
        getName(){
            return this.studentName
        }

        getAge(){
            return this.studentAge
        }

  then(onFulfilled, onRejected) {
    
  }

  catch(onRejected) {
    // Your code here
  }

  static resolve(value) {
    // Your code here
  }

  static reject(reason) {
    // Your code here
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});

promise.then((value) => console.log(value)); 
*/

// const routes = [
//   {
//     name: "M1",
//     comp: "C1",
//   },
//   {
//     name: "M2",
//     comp: "C2",
//   },
//   {
//     name: "M3",
//     subComp: [
//       {
//         name: "M3A",
//         comp: "C3A",
//       },
//       {
//         name: "M3B",
//         comp: "C3B",
//       },
//     ],
//   },
//   {
//     name: "M4",
//     subComp: [
//       {
//         name: "M4A",
//         comp: "C4A",
//       },
//       {
//         name: "M4B",
//         comp: "C4B",
//       },
//     ],
//   },
//   {
//     name: "M5",
//     subComp: [
//       {
//         name: "M5A",
//         comp: "C5A",
//       },
//       {
//         name: "M5B",
//         subComp: [
//           {
//             name: "M5BA",
//             comp: "C5BA",
//           },
//           {
//             name: "M5BB",
//             comp: "C5BB",
//           },
//           {
//             name: "M5BC",
//             comp: "C5BC",
//           },
//         ],
//       },
//       {
//         name: "M5C",
//         comp: "C5C",
//       },
//     ],
//   },
// ];

// const subscriptions = [
//   {
//     name: "M1",
//     isSub: true,
//   },
//   {
//     name: "M2",
//     isSub: false,
//   },
//   {
//     name: "M3",
//     isSub: false,
//     subMod: [
//       {
//         name: "M3A",
//         isSub: true,
//       },
//       {
//         name: "M3B",
//         isSub: true,
//       },
//     ],
//   },
//   {
//     name: "M4",
//     isSub: true,
//     subMod: [
//       {
//         name: "M4A",
//         isSub: false,
//       },
//       {
//         name: "M4B",
//         isSub: true,
//       },
//     ],
//   },
//   {
//     name: "M5",
//     isSub: true,
//     subMod: [
//       {
//         name: "M5A",
//         isSub: false,
//       },
//       {
//         name: "M5B",
//         isSub: true,

//         subComp: [
//           {
//             name: "M5BA",
//             isSub: false,
//           },
//           {
//             name: "M5BB",
//             isSub: true,
//           },
//           {
//             name: "M5BC",
//             isSub: false,
//           },
//         ],
//       },
//       {
//         name: "M5C",
//         isSub: true,
//       },
//     ],
//   },
// ];

// function mergeData(routes, subscriptions) {
//   function subData(route, selectedSub) {
//     if (selectedSub.isSub === true) {
//       route.redirectTo = route.name;
//       return route;
//     } else {
//       route.comp = "UN";

//       if (route.subComp) {
//         route.subComp = route.subComp.map((subRoute) => {
//           const selectedSubMod = selectedSub?.subMod?.find(
//             (sub) => sub.name === subRoute.name
//           );
//           return subData(subRoute, selectedSubMod);
//         });
//       }

//       return route;
//     }
//   }
//   const result = routes.map((route) => {
//     const selectedSub = subscriptions.find(
//       (subscription) => subscription.name === route.name
//     );
//     return subData(route, selectedSub);
//   });

//   console.log(result);
// }

// mergeData(routes, subscriptions);

//     const data= routes.map((route)=>{
//     const selectedSub=subscriptions.find((subscription)=>subscription.name===route.name)

//     if (selectedSub.isSub === true) {
//       return route;
//     } else {
//       route.comp = "UN";
//       return route;
//     }
// })

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.lruStack = [];
  }

  get(key) {
    if (this.lruStack[key]) {
      const value = this.lruStack[key];
      this.lruStack.splice(key, 1);
      this.lruStack.unshift(value);
      console.log(this.lruStack);

      return this.lruStack[key];
    } else {
      return -1;
    }
  }

  put(key, value) {
    // this.lruStack[key]=value

    if (this.lruStack[key]) {
      this.lruStack[key] = value;

      this.lruStack.splice(key, 1);
      this.lruStack.unshift(value);
    } else {
      //   this.lruStack.push(value);

      if (this.lruStack.length === this.capacity) {
        this.lruStack.pop();
        this.lruStack.unshift(value);
      } else this.lruStack.push(value);
    }
    console.log(this.lruStack);
  }
}

const cache = new LRUCache(5);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Output: 1
cache.put(3, 3);
console.log(cache.get(2)); // Output: -1hgfds
cache.put(4, 4);
cache.put(5, 5);
console.log(cache.get(3))
