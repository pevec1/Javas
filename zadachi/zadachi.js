/* z4 */
let num = +prompt("Введите число: ");
if (num == 10) alert("Верно");
else alert("Неверно");



/*z5*/
for (let i=1;i<=50;i++){
    console.log(i);
}


/* z6*/
let a=10;
let b=3;
let r = a % b;
console.log(r);


/* z7*/
let str=String();
for(i=1;i<=9;i++){
    str=str+String(i);
}
console.log(str);


/*z8*/
let str2=String();
str2='abcde';
console.log(str2[0]+" "+str2[1]+" "+str2[4]);

/*z9*/
let mas=['Привет, ', 'мир', '!'];
console.log(mas[0]+mas[1]+mas[2]);

/*z10*/
let x = ['a','b','c'];
let y = [1,2,3];
let z = x.concat(y);
/*z11*/
// Напишите фрагмент кода (группу комманд), который будет присваивать значения 5 и 9 двум переменным, а затем третья переменная будет получать значение, равное сумме значений первых двух переменных. Вывести на экран значение третьей переменной.

let x;
let y;
let sum;

x=5;
y=9;

sum = x + y;
document.write("Summa = " + sum);