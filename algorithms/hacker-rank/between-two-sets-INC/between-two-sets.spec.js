import { describe, test, expect } from 'vitest'
import { createResultsRangeArray, findMultiplesOfA, findNumbersBetweenAB, findBiggest, getTotalX } from './between-two-sets'

describe('finds number of factors between 2 arrays', () => {
    test('creates results range array correctly', () => {
        const arrayA = [2]
        const arrayB = [20, 30, 12]

        const result = createResultsRangeArray(arrayA, arrayB)

        expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])
    })

    test('gets multiples of array A correcty', () => {
        const a = [2]
        const resultsRangeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

        const result = findMultiplesOfA(a, resultsRangeArray)

        expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])
    })


    test('finds numbers between arrays A and B correctly', () => {
        const multiplesOfA = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
        const b = [20, 30, 12]

        const result = findNumbersBetweenAB(b, multiplesOfA)

        expect(result).toEqual(1)
    })

    test('finds biggest number in an array', () => {
        const a = [12, 3, 45, 37]

        const result = findBiggest(a)

        expect(result).toEqual(45)
    })

    test('the complete function works properly', () => {
        const a = [2]
        const b = [20, 30, 12]

        const result = getTotalX(a, b)

        expect(result).toEqual(1)
    })
})