// type ValueType = { money: number; count: (value: number) => number }

// let sumValue2: ValueType = {
//   money: 200,
//   count(value: number): number {
//     return (this.money += value)
//   }
// }

// let handleCount: {
//   name: string
//   sumValue: { money: number; count: (value: number) => number }
//   friends: string[]
// } = {
//   name: 'Henry',
//   sumValue: sumValue2,
//   friends: ['bucky', 'elyse']
// }

// handleCount.sumValue.count(500)
// console.log(handleCount)

type SumValue = { money: number; count: (val: number) => void }

let sumValues: SumValue = {
  money: 200,
  count(value: number): void {
    this.money += value
  }
}

let handleCount: {
  name: string
  sumValue: SumValue
  friends: string[]
} = {
  name: 'Henry',
  sumValue: sumValues,
  friends: ['bucky', 'elyse']
}

handleCount.sumValue.count(500)
console.log(handleCount)
