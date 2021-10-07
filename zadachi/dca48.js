do {
  num = prompt("Введите число: ");
  exit = true;
  if (num == null) {
    exit = false;
  } else if (num == "" || Number(num) < 1) {
    alert("Не соответствует условиям");
  } else if (isNaN(num)) {
    alert("Введен текст вместо числа");
  } else {
    exit = false;
  }
} while (exit);

function multiplytwo(num) {
  return "i".repeat(num).repeat(num).length;
}

alert(multiplytwo(num));
console.log(multiplytwo(num));
