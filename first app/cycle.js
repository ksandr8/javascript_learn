"use strict";

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num<=55)

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 10; i++) {
    if (i===6){
        //break; //зупиняє цикл.
        continue; //продовжує цикл без кроку який не потрібний
    }
    console.log(i);
}