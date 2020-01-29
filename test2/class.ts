//class类（属性、方法）
class Person {
  public name: string
  protected gender: string = '男'
  private age: number = 27

  constructor(name: string, public username: string) {
    this.name = name
    this.username = username
  }

  printAge(age: number) {
    this.age = age
    console.log(this.age)
  }

  setGender(gender: string) {
    this.gender = gender
    console.log(this.gender)
  }
}

const person = new Person('even', 'lyw')
// console.log(person.name, person.username)

// person.printAge(21)
// person.setGender('女')

//Student 类 继承于 person类
class Student extends Person {
  studentId: number
  constructor(name: string, username: string, studentId: number) {
    super(name, username)
    this.studentId = studentId
  }

  studentPrint() {
    console.log(this.studentId)
  }
}

// const lyw = new Student('dudu', '嘟嘟', 610911)
// console.log(lyw)

// lyw.studentPrint()
// lyw.printAge(21)

// class set get修饰词 用于隔离私有属性 和 可公开属性
// class 静态属性和方法

class People {
  private _name: string = 'lyw_even'
  static PI: number = 3.14

  static calcCircle(value: number): number {
    return this.PI * value
  }

  // 私有属性赋值
  set setName(value: string) {
    this._name = value
  }

  //私有属性取值
  get getName() {
    return this._name
  }
}

// let people = new People()
// console.log(people.getName)
// people.setName = 'lyw'
// console.log(people.getName)

console.log(People.PI)
console.log(People.calcCircle(8))
