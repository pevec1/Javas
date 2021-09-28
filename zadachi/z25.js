// Напишите код, который принимает от пользователя фамилию, имя и отчество, а затем
// выводит на экран фамилию и инициалы(без пробела между инициалами).

const inputFIO = document.getElementById("inputFIO");
const outputFIO = document.getElementById("outputFIO");

inputFIO.addEventListener("input", updateValue_FIO);

function updateValue_FIO(e) {
  let surName, name, secondName;
  let indexFirstSpace, indexLastSpace;

  let str = e.target.value;

  indexFirstSpace = str.indexOf(" ");
  indexLastSpace = str.lastIndexOf(" ");

  surName = getPartString(str, indexFirstSpace, 0);
  name = getPartString(str, indexLastSpace, indexFirstSpace);
  secondName = getPartString(str, indexLastSpace);

  outputFIO.textContent =
    surName + " " + getFirstLetter(name) + getFirstLetter(secondName);
}

function getPartString(str, lastIndex, firstIndex) {
  if (firstIndex != undefined) {
    return str.substring(firstIndex, lastIndex).trim();
  }
  return str.substring(lastIndex).trim();
}

function getFirstLetter(str) {
  return str.substring(0, 1);
}
