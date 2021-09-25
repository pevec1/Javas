//объявление переменных

let stroka = "Андрей,груша,апельсин, яблоко, динозавр";
let divider = [];
let output_massive = [];

//индексы
let i = 0;
let j = 1;
let n = 0;
let k = 0;

//определяем положение запятых
for (i = 0; i < stroka.length; i++) {
  if (stroka[i] == ",") {
    divider[j] = i;
    j = j + 1;
  }
//печатаем строку с индексами для проверки
  document.write(" " + stroka[i] + " - " + i);
}

//настройки
divider[0] = 0;
divider[j] = stroka.length;
j = 0;
output_massive[0] = "";

//************определение выходного массива ***********/
document.write("<br>Massive <br>");

//пока позиция разделителя меньше длинны строки
while (divider[j] < stroka.length) {
  k = 0;//индекс массива
  //цикл перебор разделителей
  for (j = 0; j < divider.length - 1; j++) {
    output_massive[k]="";
    //вывод позиций разделителей
    document.write("divider[" + j + "]= " + divider[j] + "<br>");
    //цикл записи частей строки в массив
    for (n = divider[j]; n < divider[j + 1]; n++) {
      //условие убирает запятые
      if (stroka[n] != ",") {
        //формирование выходного массива
        output_massive[k] = output_massive[k] + stroka[n];
        //вывод строки с индексами для проверки
        document.write(" " + stroka[n] + " - ");
      }
    }
    k++;
    //вывод элементов массивов для проверки
    if (k >= 1) document.write("Massive " + output_massive[k - 1] + "<br>");
  }
}
/************************************************** */

///окончательный вывод массива
let out_arr = document.getElementById("out_arr");
let str = " ";
for (let i = 0; i < output_massive.length; i++) {
  if (output_massive[i] !== undefined) str += i + " - " + output_massive[i] + "<br>";
}
out_arr.innerHTML = str;
