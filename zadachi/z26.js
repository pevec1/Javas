let maintaxt;
let сombined;
let firstNum;
let exit;
exit = true;
let secoundNum = [];

function combined(maintaxt) {
  do {
let exit = true;  
  maintaxt = +prompt("Введите любое целое двузначное число");
    
    switch (maintaxt) {
      case "":
      case null:
        alert("Строка пустая, повторите попытку снова.");
        exit == false;
        break;
      case isNaN(maintaxt):
        alert("В строке имеются буквы иили знаки. Повторите попытку.");
        exit == false;
        break;
      case maintaxt < 10:
      case maintaxt > 99:
        alert("Вы ввели не двузначное число. Повторите попытку");
        exit == false;
        break;
      case Number.isInteger(maintaxt) == false:
        alert("Вы ввели дробное число. Повторите попытку");
        exit == false;
        break;
      default:
        exit == true;
        break
    }
  } while (exit);
  return maintaxt;
}
firstNum = combined(maintaxt);

firstNum = String(firstNum);
secoundNum = firstNum[1] + firstNum[0];
let result = +secoundNum + 8;
alert(result);
