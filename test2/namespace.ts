// namespace: 命名空间
// 隔离环境变量的污染 解决变量冲突

// namespace MyMath {
//   export const PI = 3.14

//   export function sumValue(num1: number, num2: number): number {
//     return num1 + num2
//   }

//   export function calcCircle(value: number) {
//     return value * PI
//   }
// }

// const PI = 2.88

// console.log(MyMath.sumValue(15, 5))
// console.log(PI) // PI = 2.88
// console.log(MyMath.PI) // PI = 3.14

//多重命名空间
/// <reference path="circle.ts"/>
/// <reference path="sumValue.ts"/>
console.log(MyMath.sumValue(15, 10))
console.log(MyMath.Circle.calaCircle(8))
// tsc namespace.ts --outFile app.js

// sumValue circle namespace 多个js文件合并
// tsc --outfile app.js circle.ts sumValue.ts namespace.ts
