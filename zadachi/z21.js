//21.
//Напишите код, который принимает от пользователя число, представляющее собой промежуток времени в часах, и выводит на экран этот же промежуток времени, но выраженный в секундах.

let res1; //результат вычисления

let number = +prompt("Введите количество часов: ");

res1 = calcResult1(number);

alert(`Время в секундах =  ${res1}`);

//Функция, вычисляющая результат в зависимости от флага (чётное или нечётное число)
function calcResult1(num) {
  return num * 60 * 60;
}