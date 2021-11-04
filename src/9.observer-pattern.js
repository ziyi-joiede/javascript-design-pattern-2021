// 主题,保存状态,状态变化之后触发所有观察者对象
class Subject {
	constructor() {
		this.state = 0
		this.observers = []
	}

	getState() {
		return this.state
	}

	setState(state) {
		this.state = state
		this.notifyAllObservers()
	}

	notifyAllObservers() {
		this.observers.forEach(observer => {
			observer.update()
		})
	}

	attach(observer) {
		this.observers.push(observer)
	}
}

// 观察者
class Observer {
	constructor(name, subject) {
		this.name = name
		this.subject = subject
		this.subject.attach(this)
	}

	update() {
		console.log(`${this.name} update, state: ${this.subject.state}`)
	}
}

// 测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)
s.setState(2)
s.setState(3)



class Subject {
	constructor() {
		this.state = 0
		this.observers = []
	}

	getState() {
		return this.state
	}

	setState(state) {
		this.state = state
		this.notifyAllObservers()
	}

	notifyAllObservers() {
		this.observers.forEach(observer => {
			observer.update()
		})
	}

	attach(observer) {
		this.observers.push(observer)
	}
}

class Observer {
	constructor(name, subject) {
		this.name = name
		this.subject = subject
		this.subject.attach(subject)
	}

	update() {
		console.log(`${this.name} updated`)
	}
}


class EventSys {
	constructor() {
		this.eventObj = {}
	}

	on(name, callback) {
		if(this.eventObj[name]){
			this.eventObj[name].push(callback)
		}else {
			this.eventObj[name] = [callback]
		}
	}

	emit(name) {
		this.eventObj[name].forEach(fn => {fn()})
	}
}