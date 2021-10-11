let number = +prompt("Введите число:");

let result = checkIsNegative(number);

function checkIsNegative(num) {
  return num < 0 ? true : false;
}
alert(result);
