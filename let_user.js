let user = {
  name: "Иван",
//  year: 1981,
"birth year":1980,
status: "Холост",
  getName: function () {
    return `Имя пользователя ${this.name}`;
  },
};

user.weight = 75;
user["f i o"] = "Иван";
user.getAge = function(){
   // return 2021 - this.year;
    return 2021 - this["birth year"];
}

// let user = {};
// user.name = "Иван";
// user.age = 24;
// user.status = "Холост";
// user.getName = function () {
//   return `Имя пользователя ${user.name}`;
// };

console.log(user.getName());
console.log(user.getAge());
console.log(user["f i o"]);
