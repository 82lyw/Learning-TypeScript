//object & type
let datasObj: { name: string; age: number } = {
  name: 'Herny',
  age: 31
}

datasObj = {
  name: 'hello',
  age: 12
}

// 复杂对象类型
let complex: { data: number[]; myfunc: (item: number) => number[] } = {
  data: [1, 2, 34],
  myfunc: function(item: number): number[] {
    this.data.push(item)
    return this.data
  }
}

// console.log(complex.myfunc(20))

//type生成类型
type MyType = { data: number[]; myfunc: (item: number) => number[] }
let complex2: MyType = {
  data: [1, 2, 34],
  myfunc: function(item: number): number[] {
    this.data.push(item)
    return this.data
  }
}
