import { describe, test, expect } from "vitest";
import { countDivisibleSumPairs } from "./divisible-sum-pairs";

describe('countsDivisibleSumPairs', () => {
    test('counts divisible sum pairs correctly', () => {
        const n = 6
        const k = 5
        const ar = [1, 2, 3, 4, 5, 6]

        const result = countDivisibleSumPairs(n, k, ar)

        expect(result).toEqual(3)
    })
})