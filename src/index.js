// class Car {
// 	constructor(number, name) {
// 		this.name = name
// 		this.number = number
// 	}
// }

// class KuaiChe extends Car {
// 	constructor(number, name) {
// 		super(number, name)
// 		this.price = 1
// 	}
// }

// class ZhuanChe extends Car {
// 	constructor(number, name) {
// 		super(number, name)
// 		this.price = 2
// 	}
// }

// class Trip {
// 	constructor(car) {
// 		this.car = car
// 	}

// 	start() {
// 		console.log(`行程开始, 车名:${this.car.name}, 车牌号: ${this.car.number}`)
// 	}

// 	end() {
// 		console.log(`本行程共计: ${this.car.price * 5} 元`)
// 	}
// }

// let car = new KuaiChe(100, '桑塔纳')
// let trip = new Trip(car)

// trip.start()
// trip.end()

class Product {
	constructor(name) {
		this.name = name
	}

	init() {
		alert('init')
	}

	fn1() {
		alert('fn1')
	}

	fn2() {
		alert('fn2')
	}
}

class Creator {
	create(name) {
		return new Product(name)
	}
}

// 测试
let creator = new Creator()
let p = creator.create('p1')

p.init()
p.fn1()