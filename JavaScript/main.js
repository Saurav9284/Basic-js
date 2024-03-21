// Map, Filter, Reduce

const array = [1, 2, 3, 4, 5];

const filter = array.filter((num) => num % 2 == 0);

const newarr = filter.map((num) => {
    return num * 10;
});

const sum = newarr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Optimized solution using a loop

let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        sum += array[i] * 10;
    }
}

console.log(sum);

// Callback Functions

const greet = () => {
    console.log('Hello nice to meet you');
}

const newgreet = (name, fun) => {
    console.log(name);
    fun();
}

newgreet('Sajid', greet);

// Higher-Order Function

// Example 1: Function passed as an argument

function greet(name) {
    return 'Hello, ' + name;
}

function sayHello(func, name) {
    return func(name);
}

console.log(sayHello(greet, 'John')); // Output: Hello, John

// Example 2: Array method with a callback function

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Destructuring array

const arr = [1,2,3,4,5];

const [a,b,,c,...rest] = arr

console.log(a,b,c,rest);

// Destructuring Object

const obj = [{"name":"Saurav","age":12},{"name":"Saurav","age":13}]

const [{"age":age1},{"age":age2}] = obj

console.log(age1,age2);

null == undefined // False

null === undefined // false

//Asyncchronus,Synchoronus
//Throtling,Debouncing,Closures,Promises
//Call,Bind,Apply
//Prototype Inheritance
//map,forEach,forin,forof



