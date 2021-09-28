//22.
//Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на вопрос «который час?» (первое – часы, второе минуты, например, 15 и 42) и выводит на экран следующие значения (каждое – в отдельной строке): сколько секунд прошло с полуночи да «данного момента» и сколько минут прошло за это же время, а также сколько минут осталось до полуночи.

let result, setResult; //результат вычисления

setResult = setNumbers();
result = calcResult(setResult);
alert(
  `Ваш результат ${result[0]} секунд прошло с полуночи до «данного момента» <br>`
);
alert(
  `Ваш результат ${result[1]} минут прошло с полуночи до «данного момента» <br>`
);
alert(`Ваш результат ${result[2]} минут осталось до полуночи`);

function calcResult(result) {
  let hours = result[0];
  let minutes = result[1];
  res1 = hours * 60 * 60 + minutes * 60;
  res2 = res1 / 60;
  res3 = 24 * 60 - res2;
  return [res1, res2, res3];
}

function setNumbers() {
  let flagNum1;
  let flagNum2;
  let result;
  do {
    alert("Который час?");
    flagNum1 = false;
    num1 = prompt("Введите количество часов:");

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
        num2 = prompt("Введите количество минут:");

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
