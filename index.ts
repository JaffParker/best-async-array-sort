export default function asyncSort(array: number[]): Promise<number[]> {
  return new Promise(function (resolve, reject) {
    let sortedArray: number[] = [],
      maxValue = 0,
      timeout = setTimeout(() => {
        reject('¯\\_(ツ)_/¯')
      }, 10000)

    for (const value of array) {
      if (!Number.isInteger(value)) {
        reject('Only integer values are accepted')
        clearTimeout(timeout)
      }
      if (value < 0) {
        reject('Negative integers are not accepted')
        clearTimeout(timeout)
        break
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
    }
  })
}
