"use strict"; // використання нового режиму

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
}; 
obj.a = 10;
console.log(obj.a);

var name = 'Alex';
name = 'Ivan';
console.log(name);

{
    let num = 2; // не знайде змінної
    var nums = 5; // виведе змінну
}
console.log(nums);