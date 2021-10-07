let input = inputFarenheit();
let celsium = getCelsium();

function inputFarenheit() {
  let input;
  let exit = true;
  do {
    input = prompt("Введите значение температуры по Фаренгейту: ");
    if (isNaN(input)) {
      alert("Введен текст!");
    } else if (input == "") {
      alert("Введена пустая строка!");
    } else if (input == null) {
      alert("Отмена ввода!");
    } else {
      exit = false;
    }
  } while (exit);
  return input;
}

function getCelsium() {
  let celsium;
  celsium = Math.abs((input - 32) * (5 / 9)) + "℃   ";
  alert(celsium);
  document.write(celsium);
  console.log(celsium);
}
