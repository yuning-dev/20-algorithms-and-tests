import { describe, test, expect } from 'vitest'

import { translatesToNumbers, tracksHeight, countsValleys, wholeFunc, optimisedFunc } from './counting-valleys'

describe('count valleys', () => {
    test('generates numbers from U and D', () => {
        const steps = 8
        const path = 'UDDDUUUD'

        const result = translatesToNumbers(steps, path)

        expect(result).toEqual([1, -1, -1, -1, 1, 1, 1, -1])
    })

    test('generates height values', () => {
        const stepsWithHeight = [1, -1, -1, -1, 1, 1, 1, -1]

        const result = tracksHeight(stepsWithHeight)

        expect(result).toEqual([1, 0, -1, -2, -1, 0, 1, 0])
    })

    test('counts valleys', () => {
        const heightValues = [1, 0, -1, -2, -1, 0, 1, 0]

        const result = countsValleys(heightValues)

        expect(result).toEqual(1)
    })

    test('the whole function works', () => {
        const steps = 8
        const path = 'UDDDUUUD'

        const result = wholeFunc(steps, path)

        expect(result).toEqual(1)
    })

    test('the optimised function works', () => {
        const steps = 8
        const path = 'UDDDUUUD'

        const result = optimisedFunc(steps, path)

        expect(result).toEqual(1)
    })
})