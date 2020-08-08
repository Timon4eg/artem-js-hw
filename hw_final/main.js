class Good {
    done = false
    name = ''
    price = 0
    count = 0
    el = null


    constructor (name, price) {
        this.name = name
        this.price = price
        this.render()
        this.getSum()
    }
    
    onDoneClick () {
        this.done = true
        this.count++
        if (this.count < 2) {
            this.render()
        } else {
            this.el.querySelector('.count').innerHTML = this.count
        }
    }

    onDoneCartClick () {
        this.done = true
        this.count--
        if (this.count < 1) {
            this.el.remove()
        } else {
            this.el.querySelector('.count').innerHTML = this.count
        }
    }

    createButton () {
       const btn = document.createElement('button')
       btn.classList.add('button')
        btn.innerHTML = 'Добавить в корзину'
        btn.addEventListener('click', this.onDoneClick.bind(this))
        return btn
    }

    createMinusButton () {
        const btnMinus = document.createElement('button')
        btnMinus.classList.add('button-minus')
        btnMinus.innerHTML = '-'
        btnMinus.addEventListener('click', this.onDoneCartClick.bind(this))
         return btnMinus
     }

     createCount () {
        const valueCount = document.createElement('span')
        valueCount.classList.add('count')
        valueCount.innerHTML = `${this.count}`
        return valueCount
     }

    render () {
        this.el = document.createElement('div')
        this.el.classList.add('good')
        this.el.innerHTML = `
        <div class="good-name">${this.name}</div>
        <div class="good-price">Цена: <span>${this.price}</span></div>
        `
        if(!this.done) {
            this.el.appendChild(this.createButton())
        }
        else {
            this.el.appendChild(this.createMinusButton())
            this.el.appendChild(this.createCount())
        }
    
        let place = null
        if (this.done) {
            place = document.querySelector('.content-cart')
        } else {
            place = document.querySelector('.content-goods')
        }
        place.appendChild(this.el)
    }

    getSum () {
        this.sum = document.querySelector('.cart-sum')
        this.sum.innerHTML = 'Корзина пуста'      
    }
    
}

const good1 = new Good('Компьютер Asus', 1000)
const good2 = new Good('Утюг Bosch', 50)
const good3 = new Good('Ноутбук Acer', 980)
const good4 = new Good('Смартфон Apple', 50)
