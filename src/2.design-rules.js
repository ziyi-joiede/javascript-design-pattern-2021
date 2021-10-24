// 用 promise 来说明 S.O
function loadImg(src) {
	let promise = new Promise((resolve, reject) => { 
		let img = document.createElement('img')
		img.onload = function() {
			resolve(img)
		}

		img.onerror = function() {
			reject('图片加载失败')
		}

		img.src = src
	})

	return promise
}

let src = 'https://img3.sycdn.imooc.com/6113a49100015bed03700370-200-200.jpg'
let result = loadImg(src)

result
.then(img => {
	alert(`width: ${img.width}`)
	return img
})
.then(img => {
	alert(`height: ${img.height}`)
	return img
})
.catch(ex => {
	alert(ex)
})

class Car {
	constructor(number, name) {
		this.name = name
		this.number = numebr
	}
}

class KuaiChe extends Car {
	constructor(number, name) {
		super(number, name)
		this.price = 1
	}
}

class ZhuanChe extends Car {
	constructor(number, name) {
		super(number, name)
		this.price = 2
	}
}

class Trip {
	constructor(car) {
		this.car = car
	}

	start() {
		console.log(`行程开始, 车名:${this.car.name}, 车牌号: ${this.car.number}`)
	}

	end() {
		console.log(`本行程共计: ${this.car.price * 5} 元`)
	}
}

let car = new KuaiChe(100, '桑塔纳')
let trip = new Trip(car)

trip.start()
trip.end()