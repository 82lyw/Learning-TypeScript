"use strict";
// 数组 元组 枚举
var names = ['henry', 'lyw', 'lorry', 'bucky'];
//let numbers: Array<number> = [1,2]
//等价于let numbers: number[] = [1,2]
var anyArray = ['hehe', 1, false];
names[0] = 'hello';
// 元组
var colors = ['number', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red"; //101
})(Color || (Color = {}));
var myColor = Color.Yellow;
console.log(myColor);
