//32.
//Назовем «весом числа» сумму его цифр. Напишите код, который принимает от пользователя число и выводит на экран его «вес».

const inputNumber = document.querySelector("#input");
const user = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  value = e.target.value;
  if (Number(value) > 0 && String(value).length <= 100) {
    console.log("String(value).length " + String(value).length);
    let summ = 0;
    let num = 0;
    for (let i = 1; i <= Number(String(value).length); i++) {
      num = Number(value[i - 1]);
      console.log("num " + num);
      summ = Number(summ) + Number(num);
      console.log("summ " + summ);
    }
    str = Number(summ.toString().split("").reverse().join(""));
    user.textContent = summ;
  } else if (value === "") {
    user.textContent = "Введите число.";
  } else if (value.length > 100) {
    user.textContent = "Число задано неверно.";
  }
}
