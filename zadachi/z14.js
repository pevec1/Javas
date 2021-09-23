/*z14*/
// Напишите фрагмент кода, который присваивает переменной х значение типа Number, а затем присваивает переменной треть от значения переменной х. Выводить результат на экран.

let a, c;

setParams();

function setParams() {
  flag1 = false;
  do {
    a = prompt("Число a:");

    if (typeof a === "object") {
      flag1 = true;
      break;
    }
    if (a === "" || isNaN(+a)) {
      alert("Вы ввели пустую строку или не число!");
      flag1 = true;
    } else {
      calcResult();
      flag1 = true;
    }
  } while (flag1);
}

function calcResult() {
  c = Number(a) / 3;
  document.write("Число c = " + a + "/3 = " + c + "<br>");
}
