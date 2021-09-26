let exit = true;
let ask;
let myName;
let answer = [];
do {
  ask = prompt("Поздароваемся? Привет! Ответь Привет тоже");
  ask.toLowerCase();
  switch (ask) {
    case "привет":
    case "привет!":
      break;
    default:
      alert("Вредина");
       exit = false;
 }
  myName = prompt("Как тебя зовут?");
  switch (myName) {
    case "":
      alert("Вредина");
      exit = true;
      break;
    default:
      exit = false;
      break;
  }
} while (exit);
answer[0] = ask;
answer[1] = myName;
alert(answer.join(","));