import { describe, it, expect } from 'vitest'
import { squareNumbers, squareNumbers2, squareNumbers3, getKeysFromObj, getFunKeysFromObj } from './data-transformations'

describe('squaring numbers', () => {
    it('square1 squares the numbers correctly', () => {
        const numbers = [1, 2, 3, 4, 5]

        const result = squareNumbers(numbers)

        expect(result).toEqual([1, 4, 9, 16, 25])
    })

    it('square2 squares the numbers correctly', () => {
        const numbers = [1, 2, 3, 4, 5]

        const result = squareNumbers2(numbers)

        expect(result).toEqual([1, 4, 9, 16, 25])
    })

    it('square3 squares the numbers correctly', () => {
        const numbers = [1, 2, 3, 4, 5]

        const result = squareNumbers3(numbers)

        expect(result).toEqual([1, 4, 9, 16, 25])
    })
})

describe('object operations', () => {
    it('gets keys from the object', () => {
        const object = {
            a: 'I am Bob',
            b: 'I am a very very fun Bobby Bob',
            'cactus-man': 32000
        }

        const result = getKeysFromObj(object)

        expect(result).toEqual(['a', 'b', 'cactus-man'])
    })

    it('gets keys from the object and preprends "fun" to each key', () => {
        const object = {
            a: 'I am Bob',
            b: 'I am a very very fun Bobby Bob',
            'cactus-man': 32000
        }

        const result = getFunKeysFromObj(object)

        expect(result).toEqual(['funa', 'funb', 'funcactus-man'])
    })
})