//21.
//Напишите код, который принимает от пользователя число, представляющее собой промежуток времени в часах, и выводит на экран этот же промежуток времени, но выраженный в секундах.

let res1; 

let number = +prompt("Введите количество часов: ");

res1 = calcRes(number);

alert(`Время в секундах =  ${res1}`);


function calcRes(num) {
  return num * 60 * 60;
}