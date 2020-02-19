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
// НЕ РЕШЕНО
  function twoOldestAges(ages){
    var bumb1 = []
    var bumb2 = []
      if(Math.max(ages)){
        return bumb1
      };
      if(Math.max(ages)){
        return bumb2
      };
      return bumb2 + bumb1
    }