function fff (){
var a = prompt("Введите число 22", "0")
var anse = (a == 22) ? document.write("Вы ввели правельное число") : document.write("Вы ввели неправельное число");
};
console.log(fff)
//fff();

// Найти самое короткое слово 
function findShort(s){
    var words = s.split(" ");
    var shortest = words.reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    });
    var shortest = shortest.length;
    return shortest
  }