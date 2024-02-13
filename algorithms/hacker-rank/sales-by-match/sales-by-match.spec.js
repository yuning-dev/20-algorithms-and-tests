import { describe, test, expect } from 'vitest'

import { createArrayOfDifferentIntegers, getsArrayOfNumberOfPairs, sumArray, wholeFunction } from './sales-by-match'

describe('find total pairs of socks', () => {
    test('create array containing all the different integers that exist in ar', () => {
        const ar = [10, 10, 15, 5, 20, 15, 5, 10, 5, 15, 30]
        const n = 11

        const result = createArrayOfDifferentIntegers(n, ar)

        expect(result).toEqual([10, 15, 5, 20, 30])
    })

    test('creates array of integer frequencies correctly', () => {
        const ar = [10, 10, 15, 5, 20, 15, 5, 10, 5, 15, 30]
        const n = 11
        const differentIntegers = [10, 15, 5, 20, 30]

        const result = getsArrayOfNumberOfPairs(n, ar, differentIntegers)

        expect(result).toEqual([1, 1, 1, 0, 0])
    })

    test('sums the number of pairs array', () => {
        const numPairsArray = [1, 1, 1, 0, 0]

        const result = sumArray(numPairsArray)

        expect(result).toEqual(3)
    })

    test('full function works properly', () => {
        const ar = [10, 10, 15, 5, 20, 15, 5, 10, 5, 15, 30]
        const n = 11

        const result = wholeFunction(n, ar)

        expect(result).toEqual(3)
    })
})