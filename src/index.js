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

// class Product {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	init() {
// 		alert('init')
// 	}

// 	fn1() {
// 		alert('fn1')
// 	}

// 	fn2() {
// 		alert('fn2')
// 	}
// }

// class Creator {
// 	create(name) {
// 		return new Product(name)
// 	}
// }

// // 测试
// let creator = new Creator()
// let p = creator.create('p1')

// p.init()
// p.fn1()


// class SingleObject {
// 	login() {
// 		console.log('login...')
// 	}
// }

// SingleObject.getInstance = (function(){
// 	let instance;
// 	return function() {
// 		if(!instance) {
// 			instance = new SingleObject()
// 		}
// 		return instance
// 	}
// })()

// let obj1 = SingleObject.getInstance()
// obj1.login()

// let obj2 = SingleObject.getInstance()
// obj2.login()

// console.log(
// 	'obj1 === obj2', obj1 === obj2
// );

// console.log('--- 分割线 ---');

// let obj3 = new SingleObject() // 无法完全控制

// console.log(
// 	'obj1 === obj3', obj1 === obj3
// )

// 登录框
// class LoginForm {
// 	constructor() {
// 		this.state = 'hide'
// 	}

// 	show() {
// 		if(this.state === 'show') {
// 			alert('已经显示')
// 			return
// 		}

// 		this.state = 'show'
// 		console.log('登录框显示成功!')
// 	}

// 	hide() {
// 		if(this.state === 'hide') {
// 			alert('已经隐藏')
// 			return
// 		}
// 		this.state = 'hide'
// 		console.log('登录框隐藏成功!')
// 	}
// }

// LoginForm.getInstance = (function() {
// 	let instance
// 	return function() {
// 		if(!instance) {
// 			instance = new LoginForm()
// 		}

// 		return instance
// 	}
// })()

// // 测试
// let login1 = LoginForm.getInstance()
// login1.show()

// let login2 = LoginForm.getInstance()
// login2.show()

// 装饰器

// class Circle {
// 	draw() {
// 		console.log('画一个圆形')
// 	}
// }

// class Decorator {
// 	constructor(circle) {
// 		this.circle = circle
// 	}
	
// 	draw() {
// 		this.circle.draw()
// 		this.setRedBorder(this.circle)
// 	}

// 	setRedBorder(circle) {
// 		console.log('设置红色边框')
// 	}
// }

// // 测试代码
// let circle = new Circle()
// circle.draw()

// console.log('---- 分割线 ----')

// let dec = new Decorator(circle)
// dec.draw()

// @testDec
// class Demo {}

// function testDec(target) {
// 	target.isDec = true
// }
// alert(Demo.isDec)


// 代理模式
// ES6 Proxy

// 明星
// 明星
let star = {
	name: '张 xx',
	age: 25,
	phone: 'star: 13900001111'
}

// 经纪人
let agent = new Proxy(star, {
	get(target, key) {
		if(key === 'phone') {
			// 返回经纪人自己的电话
			return 'agent: 16899997777'
		}

		// 明星不报价, 经纪人报价
		if(key === 'price') {
			return 120000
		}

		return target[key]
	},
	set(target, key, val) {
		if(key === 'customPrice') {
			if( val < 10000) {
				// 最低 10w
				throw new Error('价格太低')
			} else {
				target[key] = val
				return true
			}
		}
	}
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 900000