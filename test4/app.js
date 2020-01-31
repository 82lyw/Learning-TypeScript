"use strict";
// 接口：class中
var People = /** @class */ (function () {
    function People() {
        this.name = '米斯特吴';
        this.age = 31;
        this.salary = 8000;
        this.id = 101;
        this.course = 'it';
    }
    People.prototype.greet = function () {
        console.log('hello world');
    };
    return People;
}());
var employee = {
    name: 'lyw',
    age: 21,
    salary: 0,
    sex: '女',
    work: '大学生',
    greet: function () {
        console.log('hello');
    }
};
console.log(employee);
