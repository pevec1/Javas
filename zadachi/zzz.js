let b = [];
let a = "Андрей,груша,апельсин";
let x = [];
let y = [];
let j = 1;
n = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] == ",") {
    x[j] = i;
    j = j + 1;
  }

  document.write(" " + a[i] + " - " + i);
}
x[0] = 0;
x[j] = a.length;
//document.write(" " + x + " - ");
j = 0;
let k = 0;
document.write("Massive <br>");
while (Number(x[j]) <= a.length) {
  if (Number.isInteger(x[j])) {
//    document.write("x[j]= " + x[j] + "<br>");
    for (n = x[j]; n <= x[j + 1] - 1; n++) {
      y[k] = y[k] + a[n];
    }
  }
 // document.write("Massive " + y[j] + "<br>");
  k++;
  j = j + 1;
}

let out_arr = document.getElementById("out_arr");
let str = " ";
for (let i = 0; i < y.length; i++) {
  if (y[i] !== undefined) str += i + " - " + y[i] + "<br>";
}
out_arr.innerHTML = str;