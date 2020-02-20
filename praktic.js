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


// 2 наибольших числа
var ages = [2,6,3, 3,2]
function twoOldestAges(ages){
var r = ages.sort().reverse()
console.log([r[1], r[0]])
return [r[1], r[0]] 
}
// или
function twoOldestAges(ages){
  var rankingAges = ages.sort(function(a, b) {
        return b - a;
    });
    var newArray = [ages[1], ages[0]];
    return newArray;
  }
  