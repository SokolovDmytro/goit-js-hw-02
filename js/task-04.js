'use strict';

const formatString = function (string) {
    const limitedString = string.split('');

    if (limitedString.length < 40) {
        return string;
    }

    if (limitedString.length >= 40) {
        let a = string.slice(0, 40);
        let b = a + '...';
        return b;
    }
};

// Вызовы функции для проверки работоспособности реализации:

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', ), );
// вернется форматированная строка