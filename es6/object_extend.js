{
  let o1 = {
    a: 1
  }
  let o2 = {
    b: 2
  }
  o2.__proto__ = o1
  let o3 = {...o2
  }
  console.log(o3)
}

// {
//   var o = Object.create({ x: 1, y: 2 });
//   o.z = 3;

//   let { x, ...{ y, z } } = o;
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

let z = {
  a: 3,
  b: 4
}
let n = {...z
}
console.log(n)

let aClone = {...a
}
console.log(aClone)


// 扩展运算符可以用于合并两个对象
{
  let a = {
    x: 1,
    y: 2
  }
  let b = {
    z: 3
  }
  let ab = {...a,
    ...b
  }
  console.log(ab)

  let aWithOverrides = {...a,
    x: 4,
    y: 5
  }
  console.log(aWithOverrides)
}
//如果把自定义属性放在扩展运算符前面，就变成了设置新对象的默认属性值
{
  let aWithDefaults = {
    x: 1,
    y: 2,
    ...a
  }
  console.log(aWithDefaults)
}

console.clear();

let emptyObject = {...null,
    ...undefined
