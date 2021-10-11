let arr = [];

function arrayFill(value, length) {
  for (let i = 0; i < length; i++) {
    arr.push(value);
  }
  return arr;
}
console.log(arrayFill("x", 5));
