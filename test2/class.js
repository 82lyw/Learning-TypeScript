"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class类（属性、方法）
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.gender = '男';
        this.age = 27;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function (age) {
        this.age = age;
        console.log(this.age);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        console.log(this.gender);
    };
    return Person;
}());
var person = new Person('even', 'lyw');
// console.log(person.name, person.username)
// person.printAge(21)
// person.setGender('女')
//Student 类 继承于 person类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, username, studentId) {
        var _this = _super.call(this, name, username) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.studentPrint = function () {
        console.log(this.studentId);
    };
    return Student;
}(Person));
var lyw = new Student('dudu', '嘟嘟', 610911);
console.log(lyw);
lyw.studentPrint();
lyw.printAge(21);
