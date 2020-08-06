const numbers = [3,4,5,6,7,8];

// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// });

const result = numbers.map(x => x*x);
console.log(result);

const max = numbers.filter(x => x > 3);
console.log(max);

const min = numbers.find(x=>x<5);
console.log(min);