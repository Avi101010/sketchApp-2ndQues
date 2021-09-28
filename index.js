
const array1 = [
    { name: 'stephen', age: 41 }, 
    { name: 'einstein', age: 32 }, 
    { name: 'newton', age: 46 }
];
console.log(array1);

const output =  array1.map(item => [item]);
console.log(...output);