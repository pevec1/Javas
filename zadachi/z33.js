//33.
//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

const inputNumber = document.querySelector("#input");
const user = document.getElementById("output");

inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  value = e.target.value;
    let str;
    if (value[0]==undefined) {
        str='';
    } else {
        str = value[0].toUpperCase()+value.substr(1);
    }
    user.textContent = str;
}

