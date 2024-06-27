//For Object
const person = {
    name : "Hyper",
    age : 200,
};

const userName = ({name,age}) => {
    console.log(name + " " + age);
};

userName(person);

//For Array
const arr = ['ABC','XYZ'];
const [x,y] = arr;
console.log(x);
console.log(y);