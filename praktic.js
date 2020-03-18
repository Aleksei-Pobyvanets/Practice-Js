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

  //
    function pattern(n){
      var output="";
    for (var column = 0; column < n; column++) {
        for (var row = 0; row < column+1; row++) {
            output += (column+1);
        } 
        output += '\n';
      }
      return output.substring(0, output.length - 1);
    }
  // Делает это (1\n22\n333\n4444\n55555)
  function maxTriSum(numbers){
    var rankingAges = numbers.sort(function(a, b,) {
          return b - a;
      });
      var newArray = [numbers[2],numbers[1], numbers[0]];
      
      var sum=0;
      for(var i=0;i<newArray.length;i++){
      sum = sum + parseInt(newArray[i]);
      }
      return sum
  }
  https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript  