const f = function (num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!!!!!")
    } else {
      console.log(i)
    }
  }
  return
}

f(100)
