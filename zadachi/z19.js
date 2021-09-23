//19.
//Напишите код, который принимает от пользователя число и затем выводит на экран следующие три значения (все – в одной строке, разделенные пробелом): число, меньше введенного с клавиатуры на 1, число, введенное с клавиатуры, и число, больше введенного с клавиатуры на 1.

let res1, res2, res3; //результат вычисления

let number = +prompt("Введите любое число:");

res1 = calcResult1(number);
res2 = calcResult2(number);
res3 = calcResult3(number);
alert(`Ваш результат ${res1} ${res2} ${res3}`);

//Функция, вычисляющая результат в зависимости от флага (чётное или нечётное число)
function calcResult1(num) {
  return num - 1;
}function calcResult2(num) {
  return num;
}function calcResult3(num) {
  return num + 1;
}