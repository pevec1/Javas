let btn = document.querySelector("#btn");
let numbers = document.querySelectorAll(".inputField");

let p = document.createElement("p");

btn.addEventListener("click", getResult);

function getResult() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i].value;
  }
  p.textContent = sum;
}
