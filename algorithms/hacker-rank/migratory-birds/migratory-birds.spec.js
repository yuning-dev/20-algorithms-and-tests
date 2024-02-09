import { describe, test, expect } from 'vitest'
import { findsIdWithHighestFrequency, getHighestFrequency, wholeFunc } from './migratory-birds'

describe('gets the number that appears most often, if more than one, then the smallest number', () => {
    test('returns the highest frequency', () => {
        const arr = [1, 2, 1, 2, 3]

        const result = getHighestFrequency(arr)

        expect(result).toEqual(2)
    })

    test('returns the number that appears most often when only one number has highest frequency', () => {
        const countersArray = [2, 2, 5, 8, 0]
        const biggest = 8
        
        const result = findsIdWithHighestFrequency(countersArray, biggest)

        expect(result).toEqual(4)
    })

    test('returns the number that appears most often when more than one number has the highest frequency', () => {
        const countersArray = [2, 8, 5, 8, 0]
        const biggest = 8
        
        const result = findsIdWithHighestFrequency(countersArray, biggest)

        expect(result).toEqual(2)
    })

    test('the whole function works correctly', () => {
        const arr = [1, 4, 4, 4, 5, 3]

        const result = wholeFunc(arr)

        expect(result).toEqual(4)
    })
})