// 纯函数的优缺点 可缓存性
var _ = require('lodash')
console.log(_)
var sin = _.memorize(x=>Math.sin(x))
var a = sin(7)
a = sin(7)

// 不依赖外部引用造成扩展性较差
var isBig = age => age > 18
