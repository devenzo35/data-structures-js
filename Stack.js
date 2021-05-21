// Stacks are equals to array in js but build this was good
// to undertand how they could work behind the scenes :)

// push, pop, peek, length

const MyStack = function () {
  this.container = [];
  this.count = 0;

  this.push = (element) => {
    this.container[this.count] = element;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.container[this.count];
    delete this.container[this.count];
    return result;
  };

  this.peek = () => {
    return this.container[this.count - 1];
  };

  this.length = () => {
    return this.count;
  };
};

const stack = new MyStack();

stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push("Learning stacks");
console.log(stack.length());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
