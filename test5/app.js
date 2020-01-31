"use strict";
// TypeScript 中的泛型(Generic)
// // 在函数中使用泛型
// function identify<T>(arg: T): T {
//   return arg
// }
// // 可以明确指定类型
// console.log(identify<string>('string'))
// // 交给ts推断类型
// console.log(identify(true))
// 在接口中使用泛型
// interface GenericIndentify<T> {
//   <T>(arg: T): T
// }
// function identify<T>(arg: T): T {
//   return arg
// }
// let myIdentify: GenericIndentify<number> = identify
// console.log(myIdentify(30))
// 为泛型添加约束
function getLength(obj) {
    return obj.length;
}
var obj = {
    name: 'lyw',
    age: 21,
    length: 10
};
console.log(getLength(obj));
