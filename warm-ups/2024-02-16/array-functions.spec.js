import { describe, test, expect } from 'vitest'

import { squareNumbers, squareNumbers2, map, filter } from './array-functions'

describe('array functions', () => {
    test('squares numbers', () => {
        const numbers = [2, 5, 30, 12]

        const result = squareNumbers(numbers)

        expect(result).toEqual([4, 25, 900, 144])
    })

    test('squaring numbers does not crash if the number is undefined', () => {
        const result = squareNumbers(undefined)

        expect(result).toBeUndefined()
    })

    test('func 2 squares numbers', () => {
        const numbers = [2, 5, 30, 12]

        const result = squareNumbers2(numbers)

        expect(result).toEqual([4, 25, 900, 144])
    })

    test('func 2 squaring numbers does not crash if the number is undefined', () => {
        const result = squareNumbers2(null)

        expect(result).toBeUndefined()
    })

    test('maps array', () => {
        const numbers = [1, 3, 5, 7, 9]

        const result = map(numbers, (num) => num + 1)
        
        expect(result).toEqual([2, 4, 6, 8, 10])
    })

    test('filters array', () => {
        const words = ['spring', 'hobble-wobble', 'gastrointestinal', 'garden', 'Humuhumunukunukuapua']

        const result = filter(words, (word) => word.length > 8)

        expect(result).toEqual(['hobble-wobble', 'gastrointestinal', 'Humuhumunukunukuapua'])
    })
})