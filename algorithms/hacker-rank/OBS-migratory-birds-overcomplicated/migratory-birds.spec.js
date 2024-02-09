import { describe, test, expect } from 'vitest'
import { countSightings, createDifferentValuesArr, findsHighestSighting, orderDifValuesArr } from './migratory-birds'

describe('of the most sighted birds, returns the lowest id', () => {
    test('gets the array with all the different id values', () => {
        const arr = [1, 2, 1, 2, 3]
        
        const result = createDifferentValuesArr(arr)

        expect(result).toEqual([1, 2, 3])
    } )

    test('orders the diffent values array', () => {
        const difValuesArr = [3, 2, 5, 1, 4]

        const result = orderDifValuesArr(difValuesArr)

        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    test('gets array of number of sightings', () => {
        const arr = [1, 2, 1, 2, 3]
        const orderedArray = [1, 2, 3]

        const result = countSightings(orderedArray, arr)

        expect(result).toEqual([2, 2, 1])
    })

    test('gets the highest number of sightings', () => {
        const arrayOfSightings = [2, 2, 1]

        const result = findsHighestSighting(arrayOfSightings)

        expect(result).toEqual(2)
    })
})