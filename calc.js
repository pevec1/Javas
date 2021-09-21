let operator;
let num1, num2;
let result;

let cancel = true;

do {
  operator = prompt("Выберите операцию (+, -, *, /, %, sq, ^, exit)");

  switch (operator) {
    case "+":
      num1 = prompt("1-е число:");
      num2 = prompt("2-е число:");
      result = Number(num1) + Number(num2);
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
