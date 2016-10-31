'use strict';
// {
//   {
//     let a = 10;
//     var b = 1;
//   }

//   console.log(a); // undefined
//   console.log(b); // 1

//   for (let i=0; i<10; i++){}
//   console.log(i); // i is not defined
// }

// // 不存在变量提升
// {
//   try {
//       console.log(foo); // undefined
//       console.log(bar); // [ReferenceError: bar is not defined]
//   } catch(e) {
//       console.log(e);
//   }
//   var foo = 2;
//   let br = 20;
// }


// if (true) {
//   tmp = 'abc';
//   console.log(tmp); // 'abc'

//   let tmp;
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123

//   console.log(typeof x);  // 'undefined'
//   let x;

//   console.log(typeof undefind_m)
// }


// function bar(x = y, y = 2) {
//   return [x, y];
// }

// console.log(bar()); // [undefined, 2]

// function bar(x = 2, y = x) {
//   return [x, y];
// }

// console.log(bar()); // [2, 2]

// 报错
// function x() {
//   let a = 10;
//   var a = 1;
// }

// function y(){
//   let a = 10;
//   let a = 1;
// }

// function func(arg) {
//   let arg;
// }

// function func(arg) {
//   {
//     let arg;
//   }
// }

// 块级作用域
//==============================================

// var tmp = new Date();

// function f(){
//   console.log(tmp); // undefined
//   if (false) {
//     var tmp = 'hello world';
//   }
// }

// f();

// var s = 'hello';

// for (var i=0; i<s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i);

// function f1(){
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n); // 5
// }
// f1();

// {{{{
//   {let insane = 'Hello World'}
//   console.log(insane); // ReferenceError: insane is not defined
// }}}};

// if (true) {
//   function f() {}
// }

// function f() { console.log('I am outside!'); }
// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

// if (true) {
//   console.log(MAX);
//   const MAX = 5;
// }

// const foo = {};
// foo.prop = 123;
// console.log(foo.prop);
// foo = {}; // SyntaxError: "foo" is read-only

// const a = [];
// a.push('Hello');
// a.length = 0;
// a = ['Dave']; // SyntaxError: "a" is read-only

// const foo = Object.freeze({});
// foo.prop = 123; // Can't add property prop, object is not extensible

// 将对象彻底冻结的函数
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach((key, value) => {
//     if (typeof obj[key] === 'object') {
//       constantize(obj[key]);
//     }
//   });
// }

// ES6一共有6种声明变量的方法
// var function let const import class

// 顶层对象的属性
// let b = 1;
// console.log(window.b);  // undefined

// console.log(new Function('return this')()); // Cannot convert undefined or null to object or window
