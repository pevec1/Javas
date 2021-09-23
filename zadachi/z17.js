/*z17*/
// Напишите фрагмент кода, который принимает от пользователя число и если число четное
// то программа выводит на экран число, которое больше введенного с клавиатуры на 10, в
// противном случае выводит на экран число в 10 раз больше введенного.

let isEven; //флаг - чётное число (true) или нечётное (false)
let result; //результат вычисления

let number = +prompt("Введите любое число:");

isEven = checkIsEven(number);
result = calcResult(isEven, number);
alert(`Ваш результат ${result}`);
// alert(`Ваш результат ${calcResult(checkIsEven(number), number)}`);

//Функция, проверяющая число на чётность
function checkIsEven(num) {
  return num % 2 == 0 ? true : false;
}

//Функция, вычисляющая результат в зависимости от флага (чётное или нечётное число)
function calcResult(flag, num) {
  return flag == true ? num + 10 : num * 10;
}