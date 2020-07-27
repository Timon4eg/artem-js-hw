/*
//---------------------------Домашнее задание 3--------------------------
//С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let i = 0;
while (i < 100) {
    let f = 2;
    while (f < i) {
        if (i % f === 0) {
            break;
        }
        f++;
    }
    if (i === f) {
        console.log(i);
    }
    i++;
}

//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let arr = [5, 21, 14, 3, 1]

let res = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert(res); // сумма 44


//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
for (let i =0; i <= 9; console.log(i++)) {

}

//Нарисовать пирамиду с помощью console.log
let arr = [];
let i = 0;
while (i < 20){
    i++;
    arr.push('x');
    console.log(arr);
}

//---------------------------конец Домашнего задания 3--------------------------
*/

//---------------------------Домашнее задание 4--------------------------

//Написать функцию, преобразующую число в объект.        
var a = {
  number: prompt('Введите число от 0 до 999'),
  units: 0,
  tens: 0,
  hundreds: 0,
};
if (a.number >= 0 && a.number <= 9){
  a.units = a.number
  console.log('Число ' + a.number)
  console.log('Единицы ' + a.units)
} else if (a.number >= 10 && a.number <= 999){
  a.units = Math.floor(a.number % 10)
  a.tens = Math.floor(a.number / 10 % 10)
  a.hundreds = Math.floor(a.number / 100 % 10)
  console.log('Число ' + a.number)
  console.log('Сотни ' + a.hundreds)
  console.log('Десятки ' + a.tens)
  console.log('Единицы ' + a.units)
}else {
    console.log('Вы ввели число за диапазоном 0 - 999')
}

//---------------------------конец Домашнего задания 4--------------------------