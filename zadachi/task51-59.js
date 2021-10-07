// Задача 52

function isNumberInRange() {
  // let flag;
  let nam = document.querySelector("#getNam").value;
  nam = parseInt(nam);

  if (nam >= 0 && nam <= 10) {
    // flag = true;
    document.getElementById("result").innerHTML =
      nam + "- находится в диапазоне от 0 до 10!";
  } else {
    // flag = false;
    document.getElementById("result").innerHTML =
      nam + "- меньше 0 или больше 10!";
  }

  // document.write(
  //     `Число ${nam}- находится в диапазоне от 0 до 10 - ${flag}!`
  // );
}

let form = document.forms.form;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  isNumberInRange();
});