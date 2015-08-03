/**
 * 构造函数模式
 */
(function () {
	function Dog (name, variety) {
		this.name = name;
		this.variety = variety;
	}

	// 缺点，每次创建新的实例，都要为其分配新的内存空间
	var dog1 = new Dog('二牛', '牛头梗');
	var dog2 = new Dog('二狗', '哈奇士');
	console.log(dog1.name);
	console.log(dog2.name);

	console.log(dog1.constructor === Dog);
	console.log(dog2.constructor === Dog);

	console.log(dog1 instanceof Dog);
	console.log(dog2 instanceof Dog);

})();


/**
 * prototype
 */
(function () {

	function Dog (name, variety) {
		this.name = name;
		this.variety = variety;
	}
	// 这个对象的所有属性和方法，都会被构造函数的实例继承。
	// 可以利用这一点，把那些不变的属性和方法，定义在prototype对象上。
	Dog.prototype.type = '犬科';
	Dog.prototype.bark = function () {
		console.log('汪汪汪');
	};

	var dog1 = new Dog('二牛', '牛头梗');
	var dog2 = new Dog('二狗', '哈士奇');
	console.log(dog1.type);
	dog1.bark();
	console.log(dog2.type);
	dog2.bark();

	console.log(dog1.bark() === dog2.bark());

})();

/**
 * 原型链继承
 */
(function () {

	function Animal () {
		this.feeling = 'happy';
	}

	function Dog (name, variety) {
		this.name = name;
		this.variety = variety;
	}

	// 继承Animal
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;

	var dog = new Dog('二狗', '哈士奇');
	console.log(dog.feeling);

})();

// question1: 当被继承对象中包含引用类型的属性时，该属性会被所有实例对象共享
// question2: 不能在不影响所有实例对象的情况下，向父级构造函数传递参数
(function () {

	function Animal () {
		this.colors = ['red', 'green', 'blue'];
	}

	function Dog () {
	}

	// 继承Animal
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;

	var dog1 = new Dog();
	dog1.colors.push('black');
	console.log(dog1.colors);

	var dog2 = new Dog();
	console.log(dog2.colors);

})();

/**
 * 构造函数继承
 */
(function () {
	
	function Animal () {
		this.feeling = 'happy';
	}

	function Dog (name, variety) {
		// 解决了子对象向父元素传递参数的目的
		// 但是借助构造函数，方法都在构造函数中第一，函数的复用就无从谈起
		Animal.apply(this, arguments);
		this.name = name;
		this.variety = variety;
	}

	var dog = new Dog('二狗', '哈士奇');
	console.log(dog.feeling);

})();

/**
 * 构造函数和原型链组合继承
 */
(function () {

	function Animal (name) {
		this.name = name;
		this.colors = ['red', 'green', 'blue'];
	}
	Animal.prototype.sayName = function () {
		console.log(this.name);
	};

	function Dog (name, age) {
		Animal.call(this, name);
		this.age = age;
	}
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;
	Dog.prototype.sayAge = function () {
		console.log(this.age);
	};

})();

/**
 * YUI式继承
 */
(function () {

	function Animal () {}
	Animal.prototype.feeling = 'happy';

	function extend (Child, Parent) {
		var F = function () {};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.prototype.constructor = Child;
	}

	extend(Dog, Animal);

	var dog = new Dog('二狗', '哈士奇');
	console.log(dog.feeling);

})();


/**
 * 深复制
 */
(function () {

	function Animal() {}
	Animal.prototype.feeling = 'happy';

	function deepCopy (Child, Parent) {
		var p = Parent.prototype;
		var c = Child.prototype;

		for (var i in p) {
			if (typeof p[i] === 'object') {
				c[i] = (p[i].constructor === Array) ? [] : {};
				deepCopy(p[i], c[i]);
			} else {
				c[i] = p[i];
			}
		}
	}

	deepCopy(Dog, Animal);

	var dog = new Dog('二狗', '哈士奇');
	console.log(dog.feeling);

})();