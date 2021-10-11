let arr = [5, 6, 7, 5, 8];
let result = check(arr);
function check(num) {
  for (let i = 0; i < arr.length; i++) {
    if (num[i] == num[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(result ? "Да" : "Нет");
