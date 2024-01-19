import { test, describe, expect } from 'vitest'

import { compareTriplets } from './compare-triplets'

describe('compareTriplets', () => {
    test('bobs score goes up when his numbers are larger', () => {
        // Arrange
        const aliceNumbers = [1, 2, 3]
        const bobNumbers = [4, 5, 6]

        // Action
        const scores = compareTriplets(aliceNumbers, bobNumbers)

        // Assert
        expect(scores).toEqual([0, 3])
    })

    test.each`
    aliceNumbers | bobNumbers | expectedScores
    ${[1, 2, 3]} | ${[4, 5, 6]} | ${[0, 3]}
    ${[4, 5, 6]} | ${[1, 2, 3]} | ${[3, 0]}
    ${[5, 10, 15]} | ${[50, 10, 0]} | ${[1, 1]}
    ${[1, 2, 3]} | ${[1, 2, 3]} | ${[0, 1]}
    `('when alice has $aliceNumbers and bob has $bobNumbers the scores are $expectedScores', ({ aliceNumbers, bobNumbers, expectedScores }) => {
        const scores = compareTriplets(aliceNumbers, bobNumbers)

        expect(scores).toEqual(expectedScores)
    })
})