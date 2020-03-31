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
  // [3,2,6,8,2,3]),17 Берёт 3 цифры и их сумирует
  function maxTriSum(numbers){
    let a = numbers.sort(function(a, b) {return b-a});
    let b = a.reverse();
    let c = b.filter( function (value, index, self){ return self.indexOf(value) === index});
    let d = c.slice(-3);
    let e = d.reduce(function(acc, unit) { return acc + unit },0);
    
    return e
  }
  for(var i = 1; num >= i; i++){
  sum += i
  }
// из (3) Делает [1.2.3] и удаляет чётные значения 
function extraPerfect(n){
let arr=[1];
  for (let i=3;i<=n;i+=2)
  arr.push(i)
  return arr
}
// считает длинну цифры например 333 = 3
function digits(n) {
  for(var i = 0; n > 1; i++) {
      n /= 10;
  }
  if(i > 1){
    return i;
  }else {
  return 1
  } 
  }

  // Balanced || not Balanced numbers
  function balancedNum(number) {	
    let numArray = number.toString().split('');
    if (numArray.length < 3) { 
      return 'Balanced';
    }
    if (numArray.length % 2 !== 0) { 
      let sumRight = 0; 
      let sumLeft = 0;
      for (let i = 0; i < numArray.length; i++) {
        if (i < parseInt(numArray.length / 2)) {  
          sumLeft += Number(numArray[i]);
          console.log(i)
        } else if (i > parseInt(numArray.length / 2)) {
          sumRight += Number(numArray[i]);			
        }  
      }
      if (sumLeft === sumRight) {
        return 'Balanced';
      } else {
        return 'Not Balanced';
      }
    } else { 
      let sumRight = 0;
      let sumLeft = 0;
      let middleIndex = parseInt((numArray.length-1) / 2); 
      let middleIndex2 = numArray.length / 2; 
      for (let i = 0; i < numArray.length; i++) {
        if (i < middleIndex && i < middleIndex2) { 
          sumLeft += Number(numArray[i]);
        } else if (i > middleIndex && i > middleIndex2) {
          sumRight += Number(numArray[i]);
        }
      }
      if (sumLeft === sumRight) {
            return 'Balanced'
      } else {
         return 'Not Balanced'
      }
    }
  }

  // Сравнение чисел 122 i 122 - True else false
 function tidyNumber(n){
  let s = n.toString();
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] > s[i+1]) return false;
  }
  return true;
}