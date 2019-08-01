// 偏应用函数
// 偏函数,接受函数和部分参数，返回一个新函数，新函数接受更多的参数
// 偏应用函数实际是改造一个函数，使新函数已经拥有函数所需的部分参数，新函数只需接受未传入的参数即可
const pianyingyong = (f,...agus)=> (...moreagus)=> f(...agus,...moreagus)
function add(a,b,c){return a+b+c}

add12fun = pianyingyong(add,1,2)
console.log(add12fun(3))

