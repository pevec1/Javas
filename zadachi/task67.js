let arr = [1, 2, 3, 4, 5];
function inArray(value, arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
}
alert(inArray(6, arr));
