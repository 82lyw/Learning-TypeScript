"use strict";
// type ValueType = { money: number; count: (value: number) => number }
var sumValues = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Henry',
    sumValue: sumValues,
    friends: ['bucky', 'elyse']
};
handleCount.sumValue.count(500);
console.log(handleCount);
