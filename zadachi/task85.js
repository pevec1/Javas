let arr = new Map();
let users = {
    0: {
        firstName: "Иванов",
        birthday: "10 апреля 1956"
    },
    1: {
        firstName: "Петрова",
        birthday: "11 октября 1960"
    },
    2: {
        firstName: "Макаров",
        birthday: "11 июля 1962"
    },
    3: {
        firstName: "Речкина",
        birthday: "12 сентября 1955"
    },
    4: {
        firstName: "Кириллова",
        birthday: "16 марта 1970"
    },
    5: {
        firstName: "Юшкин",
        birthday: "3 августа 1966"
    }
}

arr = fillArr();
showArr(arr);

deletedItems(arr);
document.write("<br>");
showArr(arr);

//Функция формирования элементов ассоциативного массива из значения ключей объекта users
function fillArr() {
    //цикл по ключам (0, 1, 2, 3, 4, 5) объекта users
    for (let key in users) {
        arr.set(users[key]["firstName"], users[key]["birthday"]);
    }

    return arr;
}

//Функция вывода ассоциативного массива
function showArr(array) {
    //цикл по элементам массива
    //pair - сам элемент
    for (let pair of array) {
        document.write(`${pair[0]}: ${pair[1]}<br>`);
    }
}

//Функция удаления элементов (летние месяцы) из ассоциативного массива
function deletedItems(array) {
    for (let pair of array) {
        if (pair[1].includes("июня") || pair[1].includes("июля") || pair[1].includes("августа")) {
            array.delete(pair[0]);
        }
    }
}