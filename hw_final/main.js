class Good {
    done = false
    name = ''
    price = 0
    count = 1
    el = null


    constructor (name, price) {
        this.name = name
        this.price = price
        this.render()
        this.getSum()
    }
    
    onDoneClick () {
        this.done = true
        this.render()
    }

    createButton () {
       const btn = document.createElement('button')
       btn.classList.add('button')
        btn.innerHTML = 'Добавить в корзину'
        btn.addEventListener('click', this.onDoneClick.bind(this))
        return btn
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
