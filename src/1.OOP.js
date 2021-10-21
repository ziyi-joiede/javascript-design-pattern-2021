// // 父类
// class People {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}

// 	eat() {
// 		alert(`${this.name} eat something`)
// 	}

// 	speak() {
// 		alert(`My name is ${this.name}, age ${this.age}`)
// 	}
// }

// // 子类 继承父类
// class Student extends People {
// 	constructor(name, age, number) {
// 		super(name, age)
// 		this.number = number
// 	}

// 	study() {
// 		alert(`${this.name} study`)
// 	}
// }

// // 实例
// let xioaming = new Student('xiaoming', 10, 'A1')
// xioaming.study()
// alert(xioaming.number)
// xioaming.eat()

// // 实例
// let xiaohong = new Student('xiaohong', 11, 'A2')
// xiaohong.speak()
// xiaohong.study()

class jQuery {
	constructor(selector) {
		let slice = Array.prototype.slice
		let dom = slice.call(document.querySelectorAll(selector))
		let len = dom ? dom.length : 0
		for(let i = 0; i < len; i++){
			this[i] = dom[i]
		} 
		this.length = len
		this.selector = selector || ''
	}

	append(node){
		// ...
	}

	addClass(name) {
		// ...
	}

	html(data) {
		// ....
	}

	// 此处略去 N 个 API
}

window.$ = function(selector) {
	return new jQuery(selector)
}

let $p = $('p')
console.log($p);
console.log($p.addClass);