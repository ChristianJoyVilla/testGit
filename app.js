const numbers = [1,2,3,4,5,6,7,8,9];

const result = numbers.reduced((acc, num) => acc + num);

console.log(result);