// module 模块
// import { PI, calcCircle } from './stuff/circle'
import * as Circle from './stuff/circle'
import sum from './stuff/sumValue'

// console.log(PI)
// console.log(calcCircle(8))
console.log(Circle.PI)
console.log(Circle.calcCircle(8))
console.log(sum(8, 9))
// tsc --module commonjs app.ts
// tsc --module amd app.ts
