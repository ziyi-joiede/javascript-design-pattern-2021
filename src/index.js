// 父类
class People {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	eat() {
		alert(`${this.name} eat something`)
	}

	speak() {
		alert(`My name is ${this.name}, age ${this.age}`)
	}
}

// 子类 继承父类
class Student extends People {
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}

	study() {
		alert(`${this.name} study`)
	}
}

// 实例
let xioaming = new Student('xiaoming', 10, 'A1')
xioaming.study()
alert(xioaming.number)
xioaming.eat()

// 实例
let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.speak()
xiaohong.study()