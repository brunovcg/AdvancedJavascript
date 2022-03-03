let div = document.getElementById("esse");
let h2 = document.createElement("h2");

let paragrafo = document.createElement("p");
paragrafo.setAttribute("id", "p-1");

div.appendChild(h2);
div.setAttribute("class", "classe-1");

let age = 20;

div.appendChild(paragrafo);

let div2 = document.createElement("div");

div.appendChild(div2)



paragrafo.innerHTML = "tem ";
paragrafo.innerHTML += age;

console.log(div.length);

const color = "red";

switch (color) {
  case "red":
    console.log(`color is ${color}`);
    break;
  case "blue":
    console.log(`color is ${color}`);
    break;
  default:
    console.log(`color is ${color}`);
}

const arr = ["a", "b", "c", "d"];

for (let word of arr) {
  console.log(word);
}
// a b c d - show data

for (let word in arr) {
  console.log(word);
}
// 0 1 2 3 - show index
