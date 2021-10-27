let arrNumbers = [];
let flag = false;

do {
  let countNumbers = prompt("Кол-во чисел в массиве:");

  if (isNaN(+countNumbers)) {
    alert("Ввели не число!");
    flag = true;
  } else if (typeof countNumbers == "object") {
    alert("Вы отменили!");
    flag = false;
  } else if (+countNumbers == 0) {
    alert("Массив не может быть пустым!");
    flag = true;
  } else {
    flag = false;
    arrNumbers = getFillArr(+countNumbers);
  }
} while (flag);

let result = searchRepeatNums(arrNumbers);

alert(
  `Длина максимальной последовательности массива ${arrNumbers} = ${result[1]} \nсама последовательность: ${result[0]}`
);
//Функция заполнения элементов массива
function getFillArr(count) {
    let fillArr = [];

    for (let i = 0, randNum = 0; i < count; i++) {
        //заполнение массива с клавиатуры
        if (count <= 10) {
            fillArr.push(+prompt(`${i + 1}-й элемент:`));
        }
        //заполнение случайными числами
        else {
            randNum = Math.round(Math.random() * 100);
            fillArr.push(randNum);
        }
    }
    return fillArr;
}// function searchRepeatNums(arr) {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {}

//   return str;
// }
// function searchRepeatNums(arr) {
//   let str = "";
//   let arrChains = [];

//   //[2, 4, 4, 4, 8, 8, 4, 12, 12, 14]
//   for (let i = 0, str = arr[i], num = arr[i]; i < arr.length; i++) {
//     if (num == arr[i + 1]) {
//       str = str + " " + num.toString(); //"4 4 4"
//     } else {
//       num = arr[i + 1]; //4
//       arrChains.push(str.toString()); //["2"]
//       str = num; //2
//     }
//   }

  //Функция поиска повторяющихся последовательностей
function searchRepeatNums(arr) {
    let arrChains = [];

    //[2, 4, 4, 4, 8, 8, 4, 12, 12, 14]
    for (let i = 0, str = arr[i], num = arr[i]; i < arr.length; i++) {
        if (num == arr[i + 1]) {
            str = str + ' ' + num.toString();
        } else {
            num = arr[i + 1];
            arrChains.push(str.toString());
            str = num;
        }
    }

    // ['2', '4 4 4', '8 8', '4', '12 12', '14']
    return [arrChains[searchMax(arrChains)[0]], searchMax(arrChains)[1]];
}
//Функция поиска длины максимальной последовательности и порядкового номера
function searchMax(arrChains) {
    let lengthMax; //длина максимальной последовательности
    let index; //порядковый номер максимальной последовательности

    lengthMax = arrChains[0].split(" ").length;

    for (let i = 1; i < arrChains.length; i++) {
        if (lengthMax < arrChains[i].split(" ").length) {
            lengthMax = arrChains[i].split(" ").length;
            index = i;
        }
    }

    return [index, lengthMax];
}