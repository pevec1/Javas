//35
//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.


const outbut = document.getElementById("outbut");
const output = document.getElementById("output");

let first = document.querySelector("#first");
let second = document.querySelector("#second");

outbut.addEventListener("click", updateValue);

function updateValue() {
let inputNumber1 = document.querySelector("#input1").value;
let inputNumber2 = document.querySelector("#input2").value;
  let str = "";num1 = inputNumber1;num2 = inputNumber2;
if (num1 == "" || isNaN(+num1)) {
  str = "введите первое число";
  first.textContent=str;
  
} else {
  first.textContent='';
}
if (num2 == "" || isNaN(+num2)) {
  str = "введите второе число";
  second.textContent=str;
} else {
  second.textContent='';
}

//  let result = setNumbers();
  console.log(num1 + num2);
  str = num1 == num2 ? "числа равны" : "эти числа не равны";

  output.textContent = "Ответ: " + str;
}

function setNumbers() {
  let result;

      result = [num1, num2];
    return result;
  }
