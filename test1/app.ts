// 基本数据类型
// let num = 25
// let float = 25.5
// let hex = 0xf000
// let binary = 0b1001
// let octal = 0o733

// 重新赋值
// num = '25'
// 不能存储非原有的类型数据

// ts原型
// let num = 25 等价于
let num: number = 25

// boolean
let isLogin = false // let isLogin:boolean = true & false
// 更改
// isLogin = 1 不行

// string
let st: string = 'hello world'

// 没有对当前变量初始化具体的值
// 在内存给它实例化空间，但没有标注具体是什么类型
let anything // let anything:any
anything = 25
anything = 'hello'
