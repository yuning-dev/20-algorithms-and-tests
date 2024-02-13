import { describe, test, expect } from 'vitest'
import { mapArrayToObject, mapArrayToObject2, sumNestedArrays, sumNestedArrays2 } from './data-transformations'

describe('data transformations', () => {
    test('maps array of objects to object', () => {
        const arrayOfObjects = [
            {
                id: 'fun Bob',
                color: 'turquoise'
            },
            {
                id: 23,
                color: 'cyan'
            },
            {
                id: [1, 2, 3],
                color: 'chartreuse'
            }
        ]

        const result = mapArrayToObject(arrayOfObjects)

        expect(result).toEqual({'fun Bob': arrayOfObjects[0], '23': arrayOfObjects[1], '1,2,3': arrayOfObjects[2]})
    })

    test('shorter way of mapping array of objects to object', () => {
        const arrayOfObjects = [
            {
                id: 'fun Bob',
                color: 'turquoise'
            },
            {
                id: 23,
                color: 'cyan'
            },
            {
                id: [1, 2, 3],
                color: 'chartreuse'
            }
        ]

        const result = mapArrayToObject2(arrayOfObjects)

        expect(result).toEqual({'fun Bob': arrayOfObjects[0], '23': arrayOfObjects[1], '1,2,3': arrayOfObjects[2]})
    })

    test('sums nested arrays', () => {
        const nestedArrays = {
            ob1: {
                id: 'red',
                arr: [1, 2, 3]
            },
            ob2: {
                id: 'blude',
                arr: [7, 8, 9]
            },
        }

        const result = sumNestedArrays(nestedArrays)

        expect(result).toEqual([8, 10, 12])
    })

    test('sums nested arrays 2', () => {
        const nestedArrays = {
            ob1: {
                id: 'red',
                numbers: [1, 2, 3]
            },
            ob2: {
                id: 'blude',
                numbers: [7, 8, 9]
            },
        }

        const result = sumNestedArrays2(nestedArrays, 'numbers')

        expect(result).toEqual([8, 10, 12])
    })
})