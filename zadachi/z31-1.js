//31 вроде бы

let number;
let step;
let result;
let reverseNumber;
let sumWithOtherNumber;

number = +prompt("Введите целое положительное двузначное число:");
step = +prompt(
  "Введите любое число, которое потом прибавим к перевернутому двузначному числу:"
);

result = getResult(number, step);
document.write(result);

function getResult(number, step) {
  if (
    isNaN(number) ||
    typeof number == "string" ||
    number == "" ||
    number < 10 ||
    number > 99
  ) {
    return "Вы ввели не число или оставили поле пустым!";
  } else if (isNaN(step) || typeof step == "string" || step == "") {
    return "Вы ввели не число или оставили поле пустым!";
  } else {
    reverseNumber = getReverseNumber(number);
    result += `Если перевернуть Ваше число, получится ${reverseNumber} <br>`;

    sumWithOtherNumber = getSumWithOtherNumber(reverseNumber, step);
    result += `Если перевернутое число сложить со вторым числом, получится ${sumWithOtherNumber}`;
    return result;
  }
}

function getReverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

function getSumWithOtherNumber(num, step) {
  return num + step;
}