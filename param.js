// Напишите фрагмент кода, который присваивает переменной х значение типа Number, а
// затем присваивает переменной треть от значения переменной х. Выводить результат на
// экран.
let x;
let y;
let partX;
let partY;

setParametrs();
printResult();

function setParametrs() {
  x = +prompt("Число x:");
  y = +prompt("Число y:");

  partX = +prompt("Часть числа x:");
  partY = +prompt("Часть числа y:");
}

function getPartNumber(num, part) {
  if (part == 0) {
    return "На 0 делить нельзя!";
  }
  return (num / part).toFixed(2);
}

function printResult() {
  document.write(
    `${partX}-я часть числа ${x} = ` + getPartNumber(x, partX) + `<br>`
  );
  document.write(`${partY}-я часть числа ${y} = ` + getPartNumber(y, partY));
}

let b =[];
let a = ["Андрей", "груша", "апельсин"];
let x =[];
let y;
let j;
for (let i=0;i<=a.length;i++) {
  j=j+1;
  if(a[i]==",") {
    x[j]=a[i];
  }
}
for(j=1;j<=x.length;j++){
  for(i=0;i<=x[j];i++) {
    y=y+a[i];
  }
}