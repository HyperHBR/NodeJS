const fs = require('fs');
const arr = [1,2,3,4];
let i=2;

const msg = arr[i];

fs.writeFileSync('test.txt' , msg+'');