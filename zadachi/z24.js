//24.
//Напишите код, который сначала заносит в переменную строковое значение Привет, а затем принимает с клавиатуры ваше имя. Программа должна вывести на экран в одной строке сообщение, составленное из строкового значения Привет, знака "запятая" и вашего имени.

let greeting = "Привет";


const input = document.querySelector("input");
const user = document.getElementById("output");

input.addEventListener("input", updateValue);

function updateValue(e) {
  user.textContent = greeting + ", " + e.target.value;
}
