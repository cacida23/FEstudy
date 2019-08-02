const fn = (x, y) => { };
console.log(fn.length); // 函数具有length属性，其值为参数长度

const fn1 = (x, ...rest) => { };
console.log(fn1.length); // 可变参数函数length为可确定参数的长度

const fn2 = function (a, b) { console.log(...arguments); };
fn2('a', 'b');

// 箭头函数没有自己的arguments,arguments指向的所在环境的arguments
const fn3 = function (x) {
  const b = 1;
  const c = 2;
  const fn4 = (x, y, z) => {
    console.log(...arguments, 'arguments'); // 1
    return x + y + z;
  };
  fn4(x, b, c);
};
fn3(1);

// 二元函数的curry构造
function curry (fn) {
  return function curryedFn (arg1) {
    return function lastFn (arg2) {
      return fn(arg1, arg2);
    };
  };
}

function addAb (a, b) {
  return a + b;
}
const curryedAddAb = curry(addAb);
console.log(curryedAddAb(1)(2));

// 多元函数curry构造
const obj = { a: 1, b: 2 };
