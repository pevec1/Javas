let num = prompt(`Введите число`);
sumNumber(num);

function sumNumber(x) {
  let sum = 0;
  let arr;

  if (typeof x == "number") {
    x = String(x);
  }

  arr = x.split("");

  for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  sum > 9 ? sumNumber(sum) : alert(sum);
}
