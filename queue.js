// print, enqueue, dequeue, front, size, isEmpty

function Queue() {
  const collection = [];

  this.print = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
}

const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();

function PriorityQueue() {
  const collection = [];

  this.print = () => {
    console.log(collection);
  };

  this.enqueue = (element) => {
    let added = false;

    if (!collection.length) {
      collection.push(element);
    } else {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][1] < element[1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(["snacks", 1]);
priorityQueue.enqueue(["food", 5]);
priorityQueue.enqueue(["snacks", 1]);
priorityQueue.enqueue(["drinks", 2]);
priorityQueue.enqueue(["drinks", 2]);
priorityQueue.enqueue(["drinks", 2]);
priorityQueue.enqueue(["health", 6]);
priorityQueue.print();
