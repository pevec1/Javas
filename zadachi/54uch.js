let num = "593";
let sum = 0;

sum = getNumSum(num);
alert(sum);

function getNumSum(num) {
  let mas = makeArrNum(num); //[5, 6]
  sum = 0;

  for (let i = 0; i < mas.length; i++) {
    sum += mas[i];
  }

  if (sum > 9) {
    getNumSum(sum);
  }
  return sum;
}

function makeArrNum(num) {
  let mas;

  if (typeof num == "number") {
    num = num.toString();
  }
  mas = num.split(""); //["5", "6"]

  for (let i = 0; i < mas.length; i++) {
    mas[i] = Number(mas[i]); // [5] [6]
  }

  return mas;
}
