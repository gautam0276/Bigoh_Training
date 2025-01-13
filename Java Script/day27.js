// Merge Intervals
/*
let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function mergeIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];
  let startingArr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const next = arr[i];

    if (next[0] <= startingArr[1]) {
      startingArr[1] = Math.max(startingArr[1], next[1]);
    } else {
      ans.push(startingArr);
      startingArr = next;
    }
  }

  ans.push(startingArr);
  return ans;
}

console.log(mergeIntervals(arr));
*/
// Event Emmiter

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    console.log(args)
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
      
      console.log(...args)
    }
  }           

  off(event, listener) {
    if (this.events[event]) {
        // before removal
      this.events[event] = this.events[event].filter(
        (list) => list !== listener
      );
        //   after removal
    }
  }
  // removeAllListeners(event) {
  //   if (this.events[event]) {
  //     delete this.events[event];
  //   }
  // }
}


const emitter = new EventEmitter();
const click = (here) => console.log(`click, ${here}`);
emitter.on("click", click);
emitter.on("click", click);
emitter.on("click", click);
emitter.on("click", click);
emitter.on("click", click);

emitter.emit("click", "here",'ok','ji'); // Output: Hello, Alice
emitter.off("greet", click);
// emitter.emit("greet", "Alice"); // No output
// emitter.on("greet", greet);
// emitter.emit("greet", "Gautam"); // Output: Hello, Alice
// emitter.off("greet", greet);
// emitter.emit("greet", "Morrrr"); // No output