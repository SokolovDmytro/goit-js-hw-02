// 'use strict';

// const findLongestWord = function (string) {
//     let arrString = string.split(' ');
//     let biggestWord = arrString[0];

//     for (let i = 1; i < arrString.length; i += 1) {
//         if (arrString[i].length > biggestWord.length) {
//             biggestWord = arrString[i];
//         }
//     }
//     return biggestWord
// };

// //    Вызовы функции для проверки работоспособности реализации:

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'