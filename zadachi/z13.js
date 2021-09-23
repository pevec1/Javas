/*z13*/
// Напишите фрагмент кода, в котором переменным а и b будут присваиваться числовые значения пользователем, с помощью команды (prompt()). Далее необходимо проверить, что число попадает в диапазон "однозначное положительное число". Затем следует присвоить переменной с значение, составленное следующим образом: значение переменной а является числом десятков, значение переменной b является числом единиц. Например, если переменной а присваивается значение 4, а переменной b – значение 7, то переменная с получает значение 47. Вывести результат на экран.

let x;
let a, b;
let c;

setParams();

function setParams() {
  flag1 = false;
  flag2 = false;
  do {
    do {
      a = prompt("Число a:");
      if (typeof a === "object") {
        flag1 = false;
        break;
      }
      if (a > 0 && String(a).length == 1) {
        flag1 = false;
      } else if (a === "" || isNaN(+a)) {
        alert("Число a задано неверно.");
        flag1 = true;
      } 
    } while (flag1);
    do {
      b = prompt("Число b:");
      if (typeof b === "object") {
        flag2 = false;
        console.log(b);
        break;
      }
      if (b > 0 && String(b).length == 1) {
        flag2 = false;
      } else if (b === "" || isNaN(+b)) {
        alert("Число b задано неверно.");
        flag2 = true;
      } 
    } while (flag2);
  } while (flag1 || flag2);
        calcResult();
}

function calcResult() {
  c = String(a) + String(b);
  document.write("Число c = " + c + "<br>");
}
