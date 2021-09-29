//33.
//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

const inputNumber = document.querySelector("#input");
const user = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
   user.textContent = str;
}

