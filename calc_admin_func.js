let operator;
let num1, num2;
let result;

let cancel = true;

do {
  operator = prompt("Выберите операцию (+, -, *, /, %, sq, ^, exit)");

  switch (operator) {
    case "+":
      let flagNum1;
      let flagNum2;
      do {
        flagNum1 = false;

        num1 = prompt("1-е число:");
        result = checkNumber(num1);

        if (typeof result == "string") {
          break;
        } else if (result) {
          alert("Вы ввели пустую строку или не число!");
          flagNum1 = result;
        } else {
          do {
            flagNum2 = false;

            num2 = prompt("2-е число:");
            result = checkNumber(num2);

            if (typeof result == "string") {
              flagNum1 = false;
              break;
            } else if (result) {
              alert("Вы ввели пустую строку или не число!");
              flagNum2 = result;
            } else {
              result = Number(num1) + Number(num2);
            }
          } while (flagNum2);
        }
      } while (flagNum1);
      break;
    case "-":
      num1 = prompt("1-е число:");
      num2 = prompt("2-е число:");
      result = Number(num1) - Number(num2);
      break;
    case "*":
      num1 = prompt("1-е число:");
      num2 = prompt("2-е число:");
      result = Number(num1) * Number(num2);
      break;
    case "/":
      num1 = prompt("1-е число:");
      num2 = prompt("2-е число:");
      result = Number(num1) / Number(num2);
      break;
    case "%":
      num1 = prompt("1-е число:");
      num2 = prompt("2-е число:");
      result = Number(num1) % Number(num2);
      break;
    case "sq":
      num1 = prompt("Число:");
      num2 = prompt("Степень корня:");
      result = Math.pow(Number(num1), 1 / Number(num2));
      break;
    case "^":
      num1 = prompt("Число:");
      num2 = prompt("Степень:");
      result = Math.pow(Number(num1), Number(num2));
      break;
    case "exit":
    case null:
      cancel = false;
      result = "Вы вышли!";
      break;
    default:
      alert("Вы ошиблись! Нет такой операции!!!");
  }
  alert(result);
} while (cancel);

function checkNumber(num) {
  if (typeof num == "object") {
    return "Вы отменили!";
  }
  if (num == "" || isNaN(+num)) {
    return true;
  }
}
