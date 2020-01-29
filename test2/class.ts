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

const lyw = new Student('dudu', '嘟嘟', 610911)
console.log(lyw)

lyw.studentPrint()
lyw.printAge(21)
