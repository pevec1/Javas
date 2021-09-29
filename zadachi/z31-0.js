//31 вроде бы

let result;
let num = setNumber();
let reverseNum = num == null ? alert("Вы отменили!") : getReverseNum(num);

if (isFinite(reverseNum)) {
  result = getResult(reverseNum);
  alert(
    `Ввёденное исходное число ${num}, перевёрнутое число ${reverseNum}. Результат вычисления = ${result}`
  );
}

function setNumber() {
  let num;
  let exit = true;

  do {
    num = prompt("Введите положительное, двухзначное, целое число:");
    if (num == null) {
      exit = false;
    } else if (num == "") {
      alert("Введена пустая строка!");
    } else if (isNaN(num)) {
      alert("Введён текст, а не число!");
    } else {
      if (!Number.isInteger(+num)) {
        // num = Number.parseInt(num, 10);
        alert("Введено не целое число!");
      } else {
        if (
          (num.length == 2 && num[0] != "-") ||
          (num.length == 3 && num[0] == "-")
        ) {
          num = Math.abs(+num);
          exit = false;
        } else {
          alert("Введено не двухзначное число!");
        }
      }
    }
  } while (exit);

  return num;
}

//Например, num = 56

//56 - number
//"56" - string (toString())
//["5", "6"] - array (split(""))
//["6", "5"] - array (reverse())
//"65" - string (join(""))
//65 - number (Number(...))

function getReverseNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}

//0 - 1
//0.56 - 5.6 - 5
//0.2 - 2.0 - 2
//0.99 - 9.9 - 9

function getResult(num) {
  let step = Number.parseInt(Math.random() * 10, 10);
  return num + step;
}
