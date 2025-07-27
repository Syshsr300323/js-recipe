const display = document.getElementById("display")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const double = document.getElementById("double")

let count = 0
increment.onclick = function () {
  count += 1

  display.textContent = count
  console.log(count)
}

decrement.onclick = function () {
  count -= 1

  display.textContent = count
  console.log(count)
}

double.onclick = function () {
  count = count * 2

  display.textContent = count
  console.log(count)
}

localStorage.course = "02_レシピ/01_カウンター"

const geek = ["web", "game", "iphone", "webExpert"]

const webExpert = {
  uniqueContent: "チーム開発",
  language: "JavaScript",
}

//localStorageに保存する
localStorage.geek = JSON.stringify(geek)
localStorage.webExpert = JSON.stringify(webExpert) //localStorageに保存する
localStorage.geek = JSON.stringify(geek)
localStorage.webExpert = JSON.stringify(webExpert)

// コンソールに出力
console.log(localStorage.geek)
//["web","game","iphone","webExpert"]
console.log(localStorage.webExpert)

// 新しい変数に入れてコンソールに出力する
let courses = JSON.parse(localStorage.geek)
let courseDetails = JSON.parse(localStorage.webExpert)

console.log(courses) // ["web", "game", "iphone", "webExpert"]
console.log(courseDetails) // {uniqueContent: "チーム開発", language: "

const fruits = ["apple", "orange", "pain"]

localStorage.fruits = JSON.stringify(fruits) //localStorageに保存する
console.log(localStorage.fruits) // ["apple", "orange", "pain"]

const fruitsPalse = JSON.parse(localStorage.fruits) //localStorageから取得して配列に変換
console.log(fruitsPalse) // ["apple", "orange", "pain"]
