let arr = [4, 6, 2, 8, 9, 45, 73, 43, 5, 78, 94, 25, 4, 3];
let newArr = [];
function more(num) {
  if (num > 0 && num <= 10) {
    return true;
  } else {
    return false;
  }
}
for (i = 0; i <= arr.length; i++) {
  if (more(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
