//36
//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

let arr = [];
arr[0] = 'x';
for(let i=0;i<=10;i++){
    arr[i+1]= arr[i]+'x';
    console.log(arr[i]);
}

