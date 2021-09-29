//34
//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

const inputNumber = document.querySelector("#input");
const output = document.getElementById("output");


inputNumber.addEventListener("input", updateValue);

function updateValue(e) {
  let flag = false;
  let str = e.target.value;
  let arr = str.split(" ");
  console.log(arr);
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      str = "Да, найдена цифра 5.";
      flag = true;
    } else {
      str = "Нет, не найдено таких цифр.";
    }
  }

  if (flag) output.textContent = "Да, найдена цифра 5.";
  else output.textContent = str;
}
