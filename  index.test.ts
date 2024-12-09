import asyncSort from './index'

describe('asyncSort', () => {
  test('should sort an array of integers', async () => {
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = await asyncSort(array)
    expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  }, 10000)

  test('should reject if array contains non-integer values', async () => {
    const array = [3, 1, 4, 'a', 5]
    //@ts-expect-error For testing purposes
    await expect(asyncSort(array)).rejects.toEqual(
      'Only integer values are accepted'
    )
  })

  test('should resolve with a ¯\\_(ツ)_/¯ array if input is empty', async () => {
    const array: number[] = []
    await expect(asyncSort(array)).rejects.toEqual('¯\\_(ツ)_/¯')
  }, 11000)

  test('should handle array with one element', async () => {
    const array = [42]
    const sortedArray = await asyncSort(array)
    expect(sortedArray).toEqual([42])
  }, 43000)

  test('should handle array with negative integers', async () => {
    const array = [-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5]
    expect(asyncSort(array)).rejects.toEqual(
      'Negative integers are not accepted'
    )
  }, 10000)
})
