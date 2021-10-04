//38
//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let arr = [-1, 0, 2, -8, -9, 4, 155, 74, -35, 0];
console.log(arr);
let num;
function recurse(num) {
    if (num<=arr.length){
    console.log(arr[num]);
    return recurse(num+1);
}
}
recurse(0); 