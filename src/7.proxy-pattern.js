class RealImg {
	constructor(fileName) {
		this.fileName = fileName
		this.loadFromDisk() // 初始化即从硬盘中加载, 模拟
	}

	display() {
		console.log('display...' + this.fileName)
	}

	loadFromDisk() {
		console.log('loading...' + this.fileName)
	}
}

class ProxyImg {
	constructor(fileName) {
		this.realImg = new RealImg(fileName)
	}

	display() {
		this.realImg.display()
	}
}

// 测试
let proxyImg = new ProxyImg('1.png')
proxyImg.display()

// ES6 Proxy

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

agent.customPrice = 9000000