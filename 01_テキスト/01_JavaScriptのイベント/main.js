const alertMessage = function () {
  alert("クリックしたね")
}

const button = document.getElementById("button")
button.onclick = function () {
  return alertMessage()
}

button.onclick()

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
  console.log(e.key)
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue
