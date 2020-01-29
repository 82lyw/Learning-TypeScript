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
// const lyw = new Student('dudu', '嘟嘟', 610911)
// console.log(lyw)
// lyw.studentPrint()
// lyw.printAge(21)
// class set get修饰词 用于隔离私有属性 和 可公开属性
// class 静态属性和方法
var People = /** @class */ (function () {
    function People() {
        this._name = 'lyw_even';
    }
    People.calcCircle = function (value) {
        return this.PI * value;
    };
    Object.defineProperty(People.prototype, "setName", {
        // 私有属性赋值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(People.prototype, "getName", {
        //私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    People.PI = 3.14;
    return People;
}());
// let people = new People()
// console.log(people.getName)
// people.setName = 'lyw'
// console.log(people.getName)
console.log(People.PI);
console.log(People.calcCircle(8));
