//40
//Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.


// const imgSrc1 = document.getElementById("id1"); 
// const imgSrc2 = document.querySelector("#id2"); 
// const imgSrc3 = document.querySelector("#id3"); 
// const imgSrc4 = document.querySelector("#id4"); 
// const imgSrc5 = document.querySelector("#id5"); 

// imgSrc1.addEventListener("click", updateValue, false);
// imgSrc2.addEventListener("click", updateValue);
// imgSrc3.addEventListener("click", updateValue);
// imgSrc4.addEventListener("click", updateValue);
// imgSrc5.addEventListener("click", updateValue);

// function updateValue(e) {
//     alert(e.target.src);
// }

let theParent = document.querySelector("#parent");
for (let i = 0; i < theParent.children.length; i++) {
  let childElement = theParent.children[i];
  childElement.addEventListener("click", doSomething, false);
}
function doSomething(e) {
  let clickedItem = e.target.src;
  alert("Ссылка " + clickedItem);
}