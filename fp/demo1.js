/******eg1.纯函数与非纯函数*/
let arr = [1,2,3,4,5]
console.log(arr.slice(0,3))
console.log(arr.slice(0,3))
console.log(arr.splice(0,3)) // splice只有数组有
console.log(arr.splice(0,3))
// slice 是纯函数，splice除了返回值外还会对原数组进行操作且无法保证固定输入固定输出
// arr.slice 的返回值依赖arr的具体值，这是不是也不算纯函数
console.log(Array.prototype.splice.call('asdasd',0,3))

