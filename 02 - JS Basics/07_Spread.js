//Creating An Arr
const arr = [1,2,3,4,5];

const arr2 = arr;//Shallow Copy
const arr3 = [...arr];

arr.push('Hello');

console.log("Arr2");
console.log(arr2);
console.log("Arr3");
console.log(arr3);