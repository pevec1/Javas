//29.
//Напишите код, который принимает с клавиатуры целое положительное двузначное число и выводит его на экран в «полном виде»: например, для числа 34 это будет выглядеть как 30 4.

const inputNumber = document.querySelector("input");
const user = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  if (Number(e.target.value) > 9 && String(e.target.value).length == 2) {
    let str = String(e.target.value);
    let str1 = str.substring(0, 1);
    let str2 = str.substring(1, 2);

    let num1 = Number(str1)*10;
    user.textContent = num1 + " " + str2;
  } else if (e.target.value === "") {
    user.textContent = "Введите число.";
  } else if (e.target.value.length > 2) {
    user.textContent = "Число задано неверно.";
  }
}

