import { a } from "./index.js"; //named import
import array from "./index.js"; //default import
var h1 = document.createElement("h1");
import { name, age, address } from "./eindex.js";

h1.innerHTML = "Hello Learning react";

document.body.appendChild(h1);
console.log(a);
for (let i = 0; i < 3; i++) {
  console.log(array[i]);
}
console.log(
  `My name is ${name} and my age is ${age} and i live in  ${address}`,
);
