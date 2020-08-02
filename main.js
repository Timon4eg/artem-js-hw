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


//---------------------------Домашнее задание 4--------------------------

//Написать функцию, преобразующую число в объект.        
let a = {
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

//Продолжить работу с интернет-магазином:
let arr = [
    {name: 'pc', price: 1000},
    {name: 'iron', price: 50},
    {name: 'laptop', price: 980},
    {name: 'phone', price: 500},
]
let res = arr.reduce(function(sum, current) {
    return sum + current.price
}, 0)
alert('Общая сумма покупок ' + res) // возможно я не правильно понял задание, но я привел корзину в вид массив объектов и посчитал общую сумму товаров в корзине

//---------------------------конец Домашнего задания 4--------------------------
*/

//---------------------------Домашнее задание 5--------------------------

// 5.1 Шахматы---------
let board = document.createElement('div')
board.classList.add('main')
document.body.append(board)

function chess () {
    let block
    let letters = 'ABCDEFGH'
    let flag = true
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            block = document.createElement('div')
            if (i==0 && j==0) {
               block.innerText = ''
                block.classList.add('white')
            }
            if (i==0 && j > 0) {
                block.textContent = letters.charAt(j-1)
                block.classList.add('keys')
            }
            if (j==0 && i > 0) {
                block.textContent = i
                block.classList.add('keys')
            }
            if (flag) block.classList.add('black')
            else block.classList.add('white')
            
            board.appendChild(block)
            flag = !flag
        }
    }
}

chess()

// 5.2 Продолжить работу с интернет-магазином:
let cart = document.createElement('div')
cart.classList.add('cart')
document.body.append(cart)

let goodsHeader = document.createElement('h2')
goodsHeader.classList.add('goods-header')
cart.appendChild(goodsHeader)
goodsHeader.innerHTML = '<h2> Товары нашего магазина</h2>'

let goods = document.createElement('div')
goods.classList.add('goods')
cart.appendChild(goods)

let arrGoods = [
    {name: 'Компьютер Asus', price: 1000},
    {name: 'Утюг Bosch', price: 50},
    {name: 'Ноутбук Acer', price: 980},
    {name: 'Смартфон Apple', price: 500},
]


for (i = 0; i < 4; i++) {
    let goodsItem = document.createElement('div')
    goodsItem.classList.add('goods-item')
    goods.appendChild(goodsItem)
    
    let goodsName = document.createElement('div')
    goodsName.classList.add('goods-name')
    goodsItem.appendChild(goodsName)
    goodsName.innerHTML = arrGoods[i].name
    
    let goodsPrice = document.createElement('div')
    goodsPrice.classList.add('goods-price')
    goodsItem.appendChild(goodsPrice)
    goodsPrice.innerHTML = arrGoods[i].price
    
    let addInCart = document.createElement('button')
    addInCart.classList.add('add-button')
    goodsItem.appendChild(addInCart)
    addInCart.innerHTML = 'Добавить в корзину'
}

let cartHeader = document.createElement('h2')
cartHeader.classList.add('cart-header')
cart.appendChild(cartHeader)
cartHeader.innerHTML = '<h2>Корзина</h2>'

let arrCart = []
let arrCartItem = {}
arrCart.push(arrCartItem)
console.log(arrCart) // здесь пока заготовка. По задумке при нажатии на кнопку Добавить в корзину должен отобразиться товар в корзине
// Также должна будет считаться сумма и количество заказанных товаров

//---------------------------конец Домашнего задания 5--------------------------