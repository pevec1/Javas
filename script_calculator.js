let userChoice; //выбор пользователем в главном меню
let operator; //выбор пользователем операции для вычисления

let cancel = true; //флаг - для выхода из внешнего/внутреннего циклов
let numbers = []; //массив для хранения чисел
let result; //результат вычисления (число или текст ошибки)

do {
  userChoice = prompt("1. Калькулятор\n2. Выход");

  switch (userChoice) {
    case "1":
      do {
        operator = prompt("Выберите операцию (+, -, *, /, %, s, ^)");
        if (typeof operator == "object") {
          result = "Вы отменили!";
          break;
        } else if (operator == "" || operator.length != 1) {
          alert("Пустая строка или больше 1-го знака!");
        } else {
          numbers = setNumbers();
          if (
            typeof numbers[0] == "object" ||
            typeof numbers[1] == "object" ||
            numbers[0] == "undefined" ||
            numbers[1] == "undefined"
          ) {
            result = "Вы отменили!";
          } else {
            result = calcResult(+numbers[0], +numbers[1], operator);
          }
          cancel = false;
        }
      } while (cancel);
      cancel = true;
      break;

    case "2":
    case null:
      cancel = false;
      result = "Вы вышли!";
      break;

    default:
      result = "Вы ошиблись! Нет такой операции!!!";
  }
  alert(result);
} while (cancel);

//Функция проверки числа
function checkNumber(num) {
  let result = +num;

  if (typeof num == "object") {
    result = "Вы отменили!";
  }
  if (num == "" || isNaN(+num)) {
    result = true;
  }

  if (typeof result == "string") {
    return false;
  }
  return result;
}

//Функция ввода чисел
function setNumbers() {
  let num1, num2;

  let flagNum1;
  let flagNum2;

  let result;

  do {
    flagNum1 = false;
    num1 = prompt("1-е число:");
    result = checkNumber(num1);

    if (!result) {
      break;
    } else if (result == true) {
      alert("Вы ввели пустую строку или не число!");
      flagNum1 = result;
    } else {
      do {
        flagNum2 = false;

        num2 = prompt("2-е число:");
        result = checkNumber(num2);

        if (!result) {
          flagNum1 = result;
          break;
        } else if (result == true) {
          alert("Вы ввели пустую строку или не число!");
          flagNum2 = result;
        }
      } while (flagNum2);
    }
  } while (flagNum1);

  return [num1, num2];
}

//Функция расчёта результата
function calcResult(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 == 0 ? "На 0 делить нельзя!" : num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "s":
      result = Math.pow(Number(num1), 1 / Number(num2));
      break;
    case "^":
      result = Math.pow(Number(num1), Number(num2));
      break;
    case null:
      cancel = false;
      result = "Вы вышли!";
      break;
  }

  return result;
}
