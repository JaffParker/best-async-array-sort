export default function (array) {
  return new Promise(function (resolve, reject) {
    let sortedArray = [],
      maxValue = 0,
      timeout = setTimeout(function () {
        reject('¯\\_(ツ)_/¯')
      }, 10000)

    array.forEach(function (value) {
      if (!Number.isInteger(value)) {
        reject('Only numeric values are accepted')
        clearTimeout(timeout)
      }

      setTimeout(function () {
        sortedArray.push(value)
      }, value)

      if (timeout && value > maxValue) {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          resolve(sortedArray)
        }, value)

        maxValue = value
      }
    })
  })
}
