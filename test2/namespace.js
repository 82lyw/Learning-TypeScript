"use strict";
// namespace: 命名空间
// 隔离环境变量的污染 解决变量冲突
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
    function calcCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
var PI = 2.88;
console.log(MyMath.sumValue(15, 5));
console.log(PI); // PI = 2.88
console.log(MyMath.PI); // PI = 3.14
