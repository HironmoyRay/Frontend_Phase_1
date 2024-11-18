// document.addEventListener("click", function () {
//   console.log("Document clicked");
// });

// document.getElementById("myButton").addEventListener("click", function (event) {
//   console.log("Button clicked");
//   event.stopPropagation();
// });

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
// });

// const all = document.querySelectorAll(".class");
// console.log(all);

// document.getElementById("myDiv").addEventListener("click", function () {
//   console.log(this);
// });
// document.getElementById("parent").addEventListener("click", function (event) {
//   console.log("currentTarget:", event.currentTarget); // Always 'parent'
//   console.log("target:", event.target); // Could be 'parent' or 'child'
// });

// document.getElementById("myButton").addEventListener("click", function(event) {

//     event.target.style.backgroundColor = "blue";

//   });

// document.getElementById("myDiv").innerHTML = "Hello World";
// document.getElementById("myDiv").innerText = "Hello World";
// document.getElementById("myDiv").value = "Hello World";

// throw new Error("My Error");
// throw "My Error";
// throw Error("My Error HP");
// const Button = document.getElementById("button");
// Button.addEventListener("click", () => console.log("Outer"));
// setTimeout(() => {}, 1000);
// Button.addEventListener("click", (event) => {
//   event.stopImmediatePropagation();
//   console.log("Inner");
// });

// const user = { name: "Bob", age: 30 };

// const {name,age}= user;
// console.log(name ,age);

// const person = {
//   name: "Alice",

//   age: 25,
// };

// Object.freeze(person);

// person.age = 30;

// console.log(person.age);

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// console.log("C");

// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// console.log("C");

// var name = "Alice";

// function printName() {
//   console.log(name);
//   var name = "Bob";
// }
// console.log(name);

// printName();

// const map = new Map();

// map.set("key", "value");

// map.set("key", "newValue");

// console.log(map.size);

// function greet() {
//   console.log(name);

//   var name = "John";
// }

// greet();

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// try {
//   throw new Error("Oops");
// } catch (error) {
//   console.log(error.message);
// }

// const set = new Set([1, 1, 2, 2, 3, 3]);
// console.log(set);

// console.log(set.size);

document
  .getElementById("parent")
  .addEventListener("click", () => console.log("parent clicked"));

document
  .getElementById("child")
  .addEventListener("click", () => console.log("child clicked"));
