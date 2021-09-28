//23.
//Кинетическая энергия тела подсчитывается как половина произведения массы тела на квадрат скорости тела. Напишите программу, которая принимает с клавиатуры два числа, первое из которых – масса тела, а второе – его скорость. Программа должна подсчитать и вывести на экран значение кинетической энергии тела.

let result; //результат вычисления
let E;

result = setNumbers();
E = calcE(result);
alert(`Кинетическая энергия тела ${E} Дж`);

function calcE(result) {
  return (result[0] * result[1] ** 2) / 2;
}

function setNumbers() {
  let flagNum1;
  let flagNum2;
  let result;
  do {
    alert(
      "Кинетическая энергия тела подсчитывается\n как половина произведения массы тела\n на квадрат скорости тела."
    );
    flagNum1 = false;
    num1 = prompt("Введите массу тела:");

    if (typeof num1 == "object") {
      result = "Вы отменили!";
      break;
    }
    if (num1 == "" || isNaN(+num1)) {
      alert("Вы ввели пустую строку или не число!");
      flagNum1 = true;
    } else {
      do {
        flagNum2 = false;
        num2 = prompt("Введите его скорость:");

        if (typeof num2 == "object") {
          result = "Вы отменили!";
          flagNum1 = false;
          break;
        }
        if (num2 == "" || isNaN(+num2)) {
          alert("Вы ввели пустую строку или не число!");
          flagNum2 = true;
        } else {
          result = [num1, num2];
        }
      } while (flagNum2);
    }
  } while (flagNum1);
  return result;
}