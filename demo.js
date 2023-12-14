const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");

var leastInterval = function (tasks, n) {
  //first I create a map of counts;
  let map = new Map();
  //here we go through each task and count its numbers
  tasks.forEach((task) => {
    let currentCount = map.get(task);
    if (!currentCount) {
      map.set(task, 1);
    } else {
      map.set(task, currentCount + 1);
    }
  });
  const maxHeap = new MaxPriorityQueue();
  //add each value to the heap
  map.forEach((key) => {
    maxHeap.enqueue(key);
  });
  let time = 0;

  // pairs of [count, idleTime]
  const queue = new Queue();

  //while either of queues is not empty continue processing
  while (queue.size() || maxHeap.size()) {
    time++;

    if (maxHeap.size()) {
      //remove that count, since we popped it from maxHeap
      const count = maxHeap.dequeue().element - 1;
      //if count is not zero than we want to go ahead and add it to queue
      if (count) {
        //time + n here represents the next available time for that task
        queue.enqueue([count, time + n]);
      }
    }
    //if queue is not empty and the left element's time is equal to the current time
    //that means we can remove that element and add to the maxHeap
    if (queue.size() && queue.front()[1] === time) {
      const el = queue.dequeue();
      maxHeap.enqueue(el[0]);
    }
  }

  return time;
};

const a = ["A", "A", "A", "B", "B", "B"];
const b = 2;

console.log(leastInterval(a, b));
