//25.
//Напишите код, который принимает от пользователя фамилию, имя и отчество, а затем выводит на экран фамилию и инициалы (без пробела между инициалами).

const input2 = document.getElementById("input");
const user2 = document.getElementById("output_FIO");

input2.addEventListener("input", updateValue_FIO);

function updateValue_FIO(e) {
  let str = e.target.value;

  let a = str.indexOf(" ", 2);
  let b = str.lastIndexOf(" ");
  
  let str0 = str.substring(0, a);
  
  let str1 = str.substring(a, b);
  str1 = str1.substring(0, 2);
  
  let str2 = str.substring(b, a + str.length);
  str2 = str2.substring(0, 2);
  str2 = str2.trim();

  user2.textContent = str0 + str1 + str2;
}
//let str = "Харенков Андрей Александрович";

// document.write(`${str0}   ${str1}    ${str2}`);
