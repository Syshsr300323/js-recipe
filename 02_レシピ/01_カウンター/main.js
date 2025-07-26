const display = document.getElementById("display")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")

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
