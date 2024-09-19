console.log("Abhishek");

// template string

const text = `the quick
  brown fox
  jumps over
  the box`;

// console.log(text);
const firstname = "abhishek";
const lastname = "desmukh";
console.log(` ${firstname} ${lastname} ${text}`);

console.clear();

// error function && arrow function

greet = (username) => {
  return `Hello ${username}`;
};
console.log(greet("Abhishek"));

// you can remove return but u need to remove curly braces as well
// if u want to re username brackets then u can but it is only one parameter  like username if there is more then you cant

// Enhanced object literals

// previously we are using like this
function user(name, password) {
  return {
    name: name,
    password: password,
  };
}

// now we can use like this in es6 results will be the same
function user(name, password) {
  return {
    name,
    password,
  };
}

// challenge

const a = 1;
const b = 2;
const c = 3;

const obj = {
  a,
  b,
  c,
};

console.log(obj);

// befor es6
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   }
// }
// after es6

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));

console.clear();
// Default function parameter

function countTo5(count) {
  if (count === true) {
    for (let i = 0; i <= 5; i++) {
      console.log(`count: ${i}`);
    }
  }
}

countTo5(true);

console.clear();

// spread operator
//with function

function giveme4(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

const colors = ["red", "green", "blue", "yellow"];

giveme4(...colors);

// with array

const strnumb = ["one", "two", "three", "four", "five"];
const morestumb = ["six", "seven", "eight", "nine", "ten"];

const concat = [...strnumb, ...morestumb];
console.log(concat);

console.clear();

const colorss = ["red", "green", "blue", "yellow"];
const allpeps = ["brown", ...colorss, "orange"];
console.log(allpeps);

// with Object

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
console.clear();

let person = {
  name: "Abhishek",
  age: 22,
  gender: "Male",
};

const clone = {
  ...person,
  work: "Software developer",
};
console.log(clone);

console.clear();
// challenge

// const arr = [1, 2, 3]
// const arr1clone = {
//   ...arr
// }

// console.log(arr1clone)

// const arr2 = [4, 5]
// const arr2clone = {
//   ...arr2clone
// }
// console.log(arr2clone);

// const arr3 = [...arr1clone, ...arr2clone]
// console.log(arr3);

console.clear();

// Rest Operator

function user6(x, ...data) {
  console.log(x);
  console.log(data);
}

user6("abhishek", "abhishek");

// challlenge

function unlimit(...paru) {
  console.log(paru);
}

unlimit(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.clear();

// Destructuring

const foo = [1, 2, 3, 4, 5, 6, 7];
const [abhi, dabi, chubi, kubi] = foo;
console.log(abhi, dabi, chubi, kubi);

console.clear();
function f() {
  return [1, 2, 3];
}
const [x, , y] = f();
console.log(x);
console.log(y);

console.clear();

// Assigning the rest of an array to a variable

const [m, ...p] = ["one", "two", "three"];
console.log([p], [m]);

console.clear();

// Challenge
const colorsss = ["red", "green", "blue", "yellow", "orange"];

const [col1, col2, col3] = colorsss;
console.log(col1, col2, col3);

console.clear();

// in object destructuring order doens't matter but the name does matter

const student = {
  name: "Abhishek",
  age: 22,
  grade: "A",
};

const { name, age, grade } = student;
console.log(name, age, grade);
console.clear();

// challenge

const personnn = {
  name: "Abhishek",
  age: 22,
  gender: "Male",
  hobbies: ["reading", "painting", "cooking"],
};

const { name: n, age: aa, gender: g, hobbies: h } = personnn;
console.log(n, aa, g, h);

console.clear();

// object desctructuring and rest operator
let { d, j, ...rest } = {
  d: 100,
  j: 200,
  k: 300,
  l: 400,
  m: 500,
};
console.log(rest);

console.clear();

// function desctructuring

const purson = {
  name: "Abhishek",
  age: 22,
  country: "India",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name : ${name}`);
  console.log(`Age : ${age}`);
  console.log(`Country : ${country}`);
}

printPersonInfo(purson);

console.clear();

let options = {
  title: "My Menu",
  items: ["item1", "item2"],
};

function showMenu({
  title,
  width: w = 100,
  height: h = 200,
  items: [item1, item2],
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(item1);
  console.log(item2);
}

showMenu(options);
