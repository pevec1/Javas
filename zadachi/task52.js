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
let link = document.getElementById("modalYa");

let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");
let btnRefresh = document.getElementById("btnRefresh");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isNumberInRange();
});

link.addEventListener("click", showModal);

btnPrev.addEventListener("click", () => {
  history.back();
});

btnNext.addEventListener("click", () => {
  history.forward();
});

btnRefresh.addEventListener("click", () => {
  history.go(0);
});

function showModal(e) {
  e.preventDefault();
  window.open("https://ya.ru", "", "height=500,width=500");
}
