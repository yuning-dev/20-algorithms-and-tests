import { describe, test, expect } from 'vitest'

import { getSubarray, getSumsOfEachSubarray, getResult } from './subarray-division'

describe('birthday', () => {
    test('creates array of subarrays correctly', () => {
        const s = [1, 2, 1, 3, 2]
        const m = 2

        const result = getSubarray(s, m)

        expect(result).toEqual([[1, 2], [2, 1], [1, 3], [3, 2]])
    })

    test('gets sums of each subarray correctly', () => {
        const arrayOfSubarrays = [[1, 2], [2, 1], [1, 3], [3, 2]]
        const m = 2

        const result = getSumsOfEachSubarray(arrayOfSubarrays, m)

        expect(result).toEqual([3, 3, 4, 5])
    })

    test('counts number of ways to divide chocolate correctly', () => {
        const subarraySums = [3, 3, 4, 5]
        const d = 3

        const result = getResult(subarraySums, d)

        expect(result).toEqual(2)
    })
})