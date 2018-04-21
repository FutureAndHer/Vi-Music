export function shuffle(arr) {
  let randomArr = arr.slice()
  for (let i = 0; i < randomArr.length; i++) {
    let j = getRandomInt(0, i)
    let t = randomArr[i]
    randomArr[i] = randomArr[j]
    randomArr[j] = t
  }
  return randomArr
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
