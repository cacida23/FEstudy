function fn(a,b,c,d){
    return a + b +c +d
}

// const fnCurry = a =>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return a+b+c+d
//             }
//         }
//     }
// }
// 可减化成
const fuCurry = a =>b=>c=>d=> a+b+c+d
console.log(fuCurry(1)(2)(3)(4))
// 柯里化调用倒最