# best-async-array-sort

This is the best array sorting module you will find out there. Seriously.

## Usage

Here's the simplest example:

```js
import sortArray from 'best-async-array-sort'

let messyArray = [1000, 5, 100, 534, 46]
  , sortedArray = []

(async function () {
  sortedArray = await sortArray(messyArray)
  console.log(sortedArray) // [5, 46, 100, 534, 1000] - done in a little more than a second!!!
})()
```

## Warning

This does not support string values. At all, don't even think about it.
