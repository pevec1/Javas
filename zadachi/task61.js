let btn = document.querySelector("#btn");
let numbers = document.querySelectorAll(".inputField");
let result = document.querySelector(".result");

btn.addEventListener("click", getResult);

function getResult() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);
  }
  let p = document.createElement("p");
  result.appendChild(p);
  p.textContent = sum;

  //2ой вариант вписать результат
  // result.innerHTML = sum;
}
