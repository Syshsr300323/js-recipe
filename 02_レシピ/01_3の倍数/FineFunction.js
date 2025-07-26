const f = function (num) {
  let i = 1
  const intervalId = setInterval(() => {
    if (i >= num) {
      clearInterval(intervalId) // 終了条件
      return
    }

    if (i % 3 === 0) {
      console.log("3がダイスキネ！！！")
    } else {
      console.log(i)
    }

    i++ // カウントを進める
  }, 1000) // 3秒ごとに処理
}

f(100)
