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

const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;
console.log ('Ширина авто: ' + vehicleBodyWidth + ', Висота авто: ' + vehicleBodyLength);

//array
const array = ['a', 'b', 'c'];
console.log(array[1]);


//object
const objct = {
    'Anna': 500,
    Girl: 450,
    3:350
};
console.log(objct.Anna);
console.log(objct.Girl);
console.log(objct[3]);
//add new properties to object
objct.first = 455; // метод додавання нової властивості в об'єкт
objct['second'] = 478; // другий метод додавання нової властивості в об'єкт
console.log(objct.first); // метод вивода строки
console.log(objct['first']); // другий метод вивода строки

