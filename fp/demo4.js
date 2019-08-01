// 使用偏函数实现一个bind
Function.prototype.myBind = function(that,...agus){
    return (...moreagus)=>{this.call(that,...agus,...moreagus)}
}

var name = 'cicada'
var obj = {
    name:'23'
}
function test(firstName,lastName){
  console.log(firstName+lastName+this.name)
}

testBind = test.myBind(obj,'liu')
testBind('jia') // liujia23