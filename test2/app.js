var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calaCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calaCircle = calaCircle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
})(MyMath || (MyMath = {}));
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
console.log(MyMath.sumValue(15, 10));
console.log(MyMath.calaCircle(8));
// sumValue circle namespace 多个js文件合并
// tsc --outfile app.js circle.ts sumValue.ts namespace.ts
