let password = 8;

if (password === 8) {
  console.log("Welcome");
}
else if (password <= 8) {
  console.log("Password is too short");
}
else if (password >= 8) {
  console.log("Too Long Password");
}
else {
  console.log("please provide password");
}



console.clear();



let fruit = "dfsf";

switch (fruit) {
  case "banana":
    console.log("I love bananas");
    break;
  case "orange":
    console.log("I love orange");
    break;
  case "apple":
    console.log("I love apple");
    break;
  default:
    console.log("I Dont no food");
    break;
}

console.clear();


for (let i = 0; i <= 1000; i++) {
  console.log("Abhishek", i);
}


console.clear();


let i = 10;
while (i <= 1000) {
  console.log("Abhishek", i);
  i++;
}


console.clear();

let j = 10;
do {
  console.log("Abhishek", j);
  j++;
}
while (j <= 1000);



let k = 10;
do {
  console.log("Abhishek", k);
  k++;
}
while (k <= 1000);

console.clear();


let favsingers = ["Abhishek", "Kalyani", "Divya"]
console.log(favsingers[0]);

let favNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mixedArray = [1, 2, "Abhishe", ["Abhi", 1], true];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);


console.clear()



const car = {
  type: "Rolls Royce",
  model: "roll",
  color: "white"
};

console.log(car.type)
console.log((car.type = "BMW"));
console.log(car)


// function declaration
function greet() {
  console.log("WElocme to fucntion")
}
greet();


// function with parameter
function saHello(name) {
  console.log(`Hello ${name}`);
}
saHello("Abhishek");
saHello("Kalyani");
saHello("Divya");


//return => function

function add(x, y) {
  return x + y
}

console.log(add(10, 29));


function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(4, 3));


console.clear();

// Call back function
function shocallfunc(fn) {
  const abhi = 10;
  fn(abhi);
}

shocallfunc(function (abhi) {
  console.log(abhi);
})

console.clear();

// method

let person = {
  name: "Abhishek",
  age: 22,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.greet());


console.clear();


//json

const person1 = {
  "name": "Abhishek",
  "age": 22,
  "email": "abhishek@gmail.com",
  "isPrivate": true,
  "hobbies": ["reading", "painting", "cooking"],
  "address": {
    "city": "New York",
    "idk": true
  },
};

// JSON.stringify

const jsonString = JSON.stringify(person1);
console.log(jsonString);

//json.parse

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

console.clear();


// Date

const currentDate = new Date();
console.log(currentDate);

