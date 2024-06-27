//Simple Function
function add(a,b){
    return a+b;
}
//Or
const add2 = function(a,b){
    return a+b;
}
//Arrow Function
const add3 = (a,b) => {
    return a+b;
};

//Only Return
const add4 = (a,b) => a+b;

//Only One Param
const add5 = a => a+1;

//No Param
const add6 = () => 2+3;

console.log(add(2,3));
console.log(add2(2,3));
console.log(add3(2,3));
console.log(add4(2,3));
console.log(add5(4));
console.log(add6());