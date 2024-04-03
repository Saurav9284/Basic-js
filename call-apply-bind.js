const obj = { name: 'John' };

function greet() {
  console.log(`Hello, ${this.name}!`);
}

greet.call(obj); // Hello, John!
greet.apply(obj); // Hello, John!

const boundGreet = greet.bind(obj);
boundGreet(); // Hello, John!
