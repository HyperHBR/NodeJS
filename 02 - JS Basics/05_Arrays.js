//Creating An Array
const arr = ['A',true,1];

//Printing An Arr Elements
for(let i of arr){
    console.log(i);
}

//Map
const arr2 = [1,2,3,4,5];
const arr3 = arr2.map(item => { 
    return item * 2;
});

for(let i of arr3){
    console.log(i);
}