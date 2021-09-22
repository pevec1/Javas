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
            num2 = prompt("2-е число:");

            if (typeof num2 == "object") {
              result = "Вы отменили!";
              flagNum1 = false;
              break;
            }
            if (num2 == "" || isNaN(+num2)) {
              alert("Вы ввели пустую строку или не число!");
              flagNum2 = true;
            } else {
              result = Number(num1) + Number(num2);
            }
          } while (flagNum2);
        }
      } while (flagNum1);
      alert(result);
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
      break;
    default:
      alert("Вы ошиблись! Нет такой операции!!!");
  }
  // alert(result);
} while (cancel);
