// 箭头函数
// ================================================

// var f = v => v;

// var f = () => 5;

// var sum = (num1, num2) => num1 + num2;

// var getTempItem = id => ({id: id, name: 'Temp'});

// const full = ({first, last}) => first + ' ' + last;

// const isEven = n => n%2 == 0;

// const square = n => n*n;


// 箭头函数的一个用处是简化回调函数
// ================================================

// var values = [1, 2, 3];
// values.map(x => x*x);

// var result = values.sort((a,b) => a - b);

// const numbers = (...nums) => nums;
// console.log(numbers(1, 2, 3, 4, 5));  // [1, 2, 3, 4, 5]

// const headAndTail = (head, ...tail) => [head, tail];
// console.log(headAndTail(1, 2, 3, 4, 5));  // [1, [2, 3, 4, 5]]

// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;
// foo.call({id: 42}); // id: 42

// function Timer() {
//   this.s1 = 0
//   this.s2 = 0

//   setInterval(() => this.s1++, 1000)

//   setInterval(function(){
//     this.s2++
//   }, 1000)
// }

// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);  // 's1': 3
// setTimeout(() => console.log('s2: ', timer.s2), 3100);  // 's0': 0


// 因为箭头函数内部没有 this ,所以引用外层代码块的 this ,正是因为它没有 this ,所以也就不能用构造函数
// 解决 "this" 的取值问题
// ===================================================

// var handler = {
//   id: '123456',

//   init: function(){
//     document.addEventListener('click', event => this.doSomething(event.type), false);
//   },

//   doSomeThing: function(type) {
//     console.log('Handling ' + type + ' for ' + this.id);
//   }
// }

// 由于箭头函数没有自己的 this , 所以当然也就不能用 call(), apply(), bind() 这些方法去改变 this 的指向
// var r = (function() {
//   return [
//     (() => this.x).bind({ x: 'inner' })()
//   ];
// }).call({ x: 'outer' });
// console.log(r); // ['outer']

// let insert = (value) => ({into: (array)=> ({after: (afterValue) => {
//   array.splice(array.indexOf(afterValue) + 1, 0, value);
//   return array;
// }})})

// console.log(insert(2).into([1, 3]).after(1))  // [1, 2, 3]

// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// console.log(addThenMult(5)) // 12

// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }
// console.log(factorial(100, 1))  // 120

// function Fibonacci2 (n, ac1 = 1, ac2 = 1) {
//   if (n <= 1) { return ac2};
//   return Fibonacci2(n - 1, ac2, ac1 + ac2);
// }
// console.log(Fibonacci2(100))
// console.log(Fibonacci2(1000))
// console.log(Fibonacci2(10000))

// 递归函数的改写
// 方法一是在尾递归函数之外，再提供一个正常形式的函数。
// =====================================================
// function tailFactorial(n, total) {
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// function factorial(n) {
//   return tailFactorial(n, 1);
// }
// console.log(factorial(5));  // 120

// 柯里化（currying）
// =====================================================
// function currying(fn, n) {
//   return function(m) {
//     return fn.call(this, m, n);
//   }
// }

// function tailFactorial(n, total) {
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// const factorial = currying(tailFactorial, 1);
// console.log(factorial(5));  // 120

// 第二种方法就简单多了，就是采用ES6的函数默认值
// =====================================================
// function factorial(n, total = 1) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }
// console.log(factorial(5)) // 120


// 尾递归优化的实现
// 要做的就是将原来的递归函数，改写为每一步返回另一个函数
// =====================================================
function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);
  } else {
    return x;
  }
}
console.log(trampoline(sum(5, 10))) // 15
