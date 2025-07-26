// let myNickName = "エキスパくん"
// console.log(myNickName)
// myNickName = "ちゃっきー"
// console.log(myNickName)

// // 変数として扱う（変更できる）
// let myAge = 22
// console.log("彼は" + myAge + "歳です")

// // 定数として扱う（変更できない）
// const birthDay = "2003/05/12"
// console.log("彼の誕生日は" + birthDay + "です")

// let a = 10
// let b = 20
// console.log("a + b =", a + b)
// console.log("a - b =", a - b)
// console.log("a * b =", a * b)
// console.log("a / b =", a / b)
// console.log("a % b =", a % b)
// console.log("a ** b =", a ** b)
// console.log("++a =", ++a)

// let kazu = 57052 + 57054
// console.log("int型 : " + kazu)
// let moji = "114" + "106"
// console.log("文字列 : " + moji)

// if (kazu === 114106) {
//   console.log("114106はint型の値です")
// } else {
//   console.log("114106はint型ではない")
// }

// if (moji === "114106") {
//   console.log("'114106'はString型")
// } else {
//   console.log("'114106'はString型ではない")
// }

// TRY: 練習問題 １
const plus1 = function (x) {
  return x + 1
}

console.log("関数の実行結果:", plus1(5)) // => 6 と表示される

// 関数名:
// 引数:
// 返り値:

// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (a) {
  return 3 * a - 2
}
console.log("f1の結果:", f1(1))
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (b) {
  return 10 ** (b - 1)
}

console.log("f2の結果:", f2(3))

// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function (c) {
  return f1(c) + f2(c)
}

console.log("f3の結果:", f3(4)) // => 1010 と表示される

// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。

const multiply = function (x, y) {
  return x * y
}

console.log("multiplyの結果:", multiply(6, 7)) // => 12 と表示される
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plusRound = function (a, b) {
  return Math.round(a + b)
}

console.log("plusRoundの結果:", plusRound(5.8, 4.7)) // => 10 と表示される

const Alert = function (message) {
  alert("Hello " + message + " !")
}
alert("練習問題は以上です！\n\n")

Alert("guys")

const alertTime = function () {
  alert(new Date().toLocaleTimeString())
}

console.log(alertTime())
