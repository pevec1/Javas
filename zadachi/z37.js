//37
//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.

let arr = [-1, 0, 2, -8, -9, 4, 155, 74, -35, 0];
console.log(arr);
let arr_new=[];
function isPositive(num) {
    let flag;
    if (num>0) flag = true;
    if (num<0) flag = false;
    return flag;
}
    let k=0;
    for(let i=0;i<10;i++){

    if (isPositive(arr[i])==true){
        arr_new[k]= arr[i];
        k++;
    
    }
    
}
console.log(arr_new);
