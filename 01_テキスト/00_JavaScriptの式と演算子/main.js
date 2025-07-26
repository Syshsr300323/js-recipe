// TRY: 練習問題１

let int = 57052 + 57054
console.log("int : ", int)

let c = "114" + "106"
console.log("String : ", c) // => 114106 と表示される

// TRY: 練習問題２

let x = 5
x += 2
x *= 5
x = 100 % x
x /= 6
console.log("x : ", x) // => 1 と表示される
// TRY: 練習問題３
let happiness = 100 // 0 から 100 までの数値を代入してください
let sleepiness = 10 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy

// 以下のコメントアウトを外して確認してみましょう

console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)

const isHappyAndNotSleepy = isHappy && !isSleepy

console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)
console.log(
  "isHappyAndNotSleepy" + "は" + true + "ですか？",
  isHappyAndNotSleepy,
)
