//42
//В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

let min = Math.round(Math.random()*59);
if (min<=15) {
    document.write("Первая четверть часа (" + min + ")");
}else if (min>15&&min<=30) {
    document.write("Вторая четверть часа (" + min + ")");
}else if (min>30&&min<=45) {
    document.write("Третья четверть часа (" + min + ")");
}else if (min>45) {
    document.write("Последняя четверть часа (" + min + ")");
} 
