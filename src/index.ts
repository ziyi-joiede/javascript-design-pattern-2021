// 父类
class People {
	name // 默认 public
	age
	protected weight  // 定义 protected 属性,只有自己或者子类可以访问
	constructor(name, age) {
		this.name = name
		this.age = age
		this.weight = 120
	}

	eat() {
		alert(`${this.name} eat something`)
	}
		
	speak() {
		alert(`My name is ${this.name}, age ${this.age}`)
	}
}

// 子类
class Student extends People {
	number
	private girlfriend

	constructor(name, age, number) {
		super(name, age)
		this.number = number
		this.girlfriend = 'xioali'
	}

	study() {
		alert(`${this.name} study`)
	}

	getWeight() {
		alert(`weight ${this.weight}`)
	}
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.getWeight()
xiaoming.wieght
alert(xiaoming.girlfriend)

