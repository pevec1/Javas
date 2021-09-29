//32.
//Назовем «весом числа» сумму его цифр. Напишите код, который принимает от пользователя число и выводит на экран его «вес».

const inputNum = document.querySelector("#inputNum");
const output = document.getElementById("output");

inputNum.addEventListener("input", updateValue);

function updateValue(e) {
  let value = e.target.value;

  if (Number(value) > 0 && value.length <= 10) {
    let summ = 0;
    let num;

    for (let i = 0; i < value.length; i++) {
      num = Number(value[i]);
      summ += num;
    }
    output.textContent = summ;
  } else if (value.length > 10) {
    output.textContent = "Число задано неверно.";
  }
}