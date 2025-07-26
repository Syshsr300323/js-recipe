const f = function (num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i.toString().includes("3")) {
      console.log("3がダイスキネ！")
    } else {
      console.log(i)
    }
  }
  return
}

f(100)
