"use strict";
// 函数的相关类型
// 返回值类型
function returnValue() {
    return 'hello';
}
console.log(returnValue());
// 空 函数没有任何返回值
function sayHello() {
    console.log('hello !@');
}
// 参数返回值
function sumValue(value1, value2) {
    return value1 + value2;
}
console.log(sumValue(1, 2));
// 函数类型
var myFunc;
// myFunc = sayHello
// myFunc()
myFunc = sumValue;
console.log(myFunc(5, 5));
