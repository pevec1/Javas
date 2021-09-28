//28.
//Напишите код, который принимает с клавиатуры целое положительное двузначное число и выводит на экран его цифры, разделенные знаком «пробел» – но в обратном порядке. То есть для числа 45 будет выведено на экран 5 4.

const inputNumber = document.querySelector("input");
const user = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  if (Number(e.target.value) > 9 && String(e.target.value).length == 2) {
    let str = String(e.target.value);
    let str1 = str.substring(0, 1);

    let str2 = str.substring(1, 2);

    user.textContent = str2 + " " + str1;
  } else if (e.target.value === "") {
    user.textContent = "Введите число.";
  } else if (e.target.value.length > 2) {
    user.textContent = "Число задано неверно.";
  }
}

