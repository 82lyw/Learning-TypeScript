// 数组 元组 枚举

let names: Array<string> = ['henry', 'lyw', 'lorry', 'bucky']
//let numbers: Array<number> = [1,2]
//等价于let numbers: number[] = [1,2]
let anyArray: any[] = ['hehe', 1, false]
names[0] = 'hello'

// 元组
let colors: [string, number] = ['number', 99]

// enum
enum Color {
  Black, //0
  Yellow = 100, //100
  Red //101
}

let myColor: Color = Color.Yellow
console.log(myColor)
