//33.
//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

const inputNumber = document.querySelector("#input");
const output = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  let value = e.target.value;
    let str;
    if (value[0]==undefined) {
        str='';
    } else {
        str = value[0].toUpperCase()+value.substr(1);
    }
    output.textContent = str;
}

