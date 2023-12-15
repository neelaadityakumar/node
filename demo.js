const {
  MaxPriorityQueue,
  MinPriorityQueue,
} = require("@datastructures-js/priority-queue");

var leastInterval = function (tasks, n) {
  let countDict = new Map();

  // Count the occurrences of each task
  tasks.forEach((task) => {
    countDict.set(task, (countDict.get(task) || 0) + 1);
  });

  // Create a min priority queue of counts
  const readyHeap = new MinPriorityQueue({ priority: (item) => item });
  countDict.forEach((count) => {
    readyHeap.enqueue(count);
  });

  let waitingQueue = [];
  let currTime = 0;

  while (!readyHeap.isEmpty() || waitingQueue.length) {
    currTime++;

    if (!readyHeap.isEmpty()) {
      let currItem = readyHeap.dequeue().element + 1;
      if (currItem !== 0) {
        waitingQueue.push([currItem, currTime + n]);
      }
    }

    if (waitingQueue.length && waitingQueue[0][1] === currTime) {
      readyHeap.enqueue(waitingQueue.shift()[0]);
    }
  }

  return currTime;
};

let tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
let n = 2;

console.log(leastInterval(tasks, n));
