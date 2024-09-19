// alert("Abhishek Deshmukh you are going to rock one day.");

console.log("Abhishek Deshmukh you are going to rock one day.");


console.log({
  name: "Abhishek Deshmukh",
  age: 30,
  location: "India"
})

console.warn("Abhishek Deshmukh you are going to rock one day.");

console.table({
  name: "Abhishek Deshmukh",
  age: 30,
  location: "India"
})



const name = "Abhishek Deshmukh";
const whatDoYouWannaBeComeInYourLife = "Programmer";
const gender = "Male";
const twitterHandle = "http://twitter.com/";

console.table({
  name,
  whatDoYouWannaBeComeInYourLife,
  gender,
  twitterHandle,
  age: 30,
})

console.clear();

const num = 10;
console.log(num);



console.clear();

const firstFavNum = 24;
const secondFavNum = 19;

add = firstFavNum + secondFavNum;
sub = firstFavNum - secondFavNum;
mul = firstFavNum * secondFavNum;
div = firstFavNum / secondFavNum;
mod = firstFavNum % secondFavNum;
power = firstFavNum ** secondFavNum;


console.table({
  firstFavNum,
  secondFavNum,
  add,
  sub,
  mul,
  div,
  mod,
  power,
})

console.clear();


let isTrue = NaN;
console.log(isTrue);


let number = 10;
console.log(number + undefined);

console.log(typeof NaN);

console.clear();

const isJsProgrammingLanguage = true;
const isJsHard = false;
let favNumb = 24;
// let favNumb = undefined;

console.table({
  isJsProgrammingLanguage,
  isJsHard,
  favNumb,
})


let firstFavNumber = 24;
let secondFavNumber = 19;

first = (firstFavNumber > secondFavNumber);
second = (firstFavNumber < secondFavNumber);
third = (firstFavNumber >= secondFavNumber);
fourth = (firstFavNumber <= secondFavNumber);
fifth = (firstFavNumber === secondFavNumber);
six = (firstFavNumber == secondFavNumber);
seven = (firstFavNumber !== secondFavNumber);
eight = (firstFavNumber != secondFavNumber);


console.table({
  first,
  second,
  third,
  fourth,
  fifth,
  six,
  seven,
  eight,
})


let favActorFirstName = "Abhishek";
let favActorLastName = "Deshmukh";
let fullName = "Abhishek";

let concati = favActorFirstName.concat(favActorLastName);
console.log(concati);

let uppercase = favActorFirstName.toUpperCase();
console.log(uppercase);

let message = `my favorite actor is ${favActorFirstName.toUpperCase()} and say something`;
message += `his best tv show is bla bla bla`;

console.log(message);