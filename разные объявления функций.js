let btnHightLight = document.getElementById("btnHihgtLight");
let pAll = document.querySelectorAll("p");

btnHightLight.addEventListener("click", setHightLight);

function setHightLight() {
  for (let p of pAll) {
    p.classList.toggle("bg");
    p.classList.toggle("space");
  }
  if (btnHightLight.textContent == "Выключить") {
    btnHightLight.textContent = "Включить";
  } else {
    btnHightLight.textContent = "Выключить";
  }
}

// btnHightLight.addEventListener("click", function () {
//     for (let p of pAll) {
//         p.classList.toggle("bg");
//         p.classList.toggle("space");
//     }
//     if (btnHightLight.textContent == "Выключить") {
//         btnHightLight.textContent = "Включить";
//     } else {
//         btnHightLight.textContent = "Выключить";
//     }
// });

// btnHightLight.addEventListener("click", () => {
//     for (let p of pAll) {
//         p.classList.toggle("bg");
//         p.classList.toggle("space");
//     }
//     if (btnHightLight.textContent == "Выключить") {
//         btnHightLight.textContent = "Включить";
//     } else {
//         btnHightLight.textContent = "Выключить";
//     }
// });
