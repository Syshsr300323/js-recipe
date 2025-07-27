const display = document.getElementById("display")
const inputValue = document.getElementById("inputValue")

const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")

const reset = document.getElementById("reset")
const equal = document.getElementById("equal")

let count = 0

add.onclick = function () {
  count += parseFloat(inputValue.value)
  display.textContent = count
  console.log(display.textContent)
}

subtract.onclick = function () {
  count -= parseFloat(inputValue.value)
  display.textContent = count
  console.log(display.textContent)
}

multiply.onclick = function () {
  count *= parseFloat(inputValue.value)
  display.textContent = count
  console.log(display.textContent)
}

divide.onclick = function () {
  const val2 = parseFloat(inputValue.value)
  if (val2 === 0) {
    display.textContent = "エラー: 0で割れません"
  } else {
    count = count / val2
    display.textContent = count
  }
  console.log(display.textContent)
}

reset.onclick = function () {
  count = 0
  display.textContent = count
}

equal.onclick = function () {
  display.textContent = count
}
