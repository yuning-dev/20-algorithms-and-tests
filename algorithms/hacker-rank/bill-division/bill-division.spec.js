import { describe, test, expect } from 'vitest'

import { bonAppetit } from './bill-division'

describe('is bill fairly split', () => {
    test('does it print Bon Appetit when the bill is shared fairly', () => {
        const bill = [14, 9, 20, 25, 50]
        const k = 3
        const b = 46.5

        const result = bonAppetit(bill, k, b)

        expect(result).toEqual('Bon Appetit')
    })

    test('does it print the amount owed to Anna when the bill is not shared fairly', () => {
        const bill = [14, 9, 20, 25, 50]
        const k = 3
        const b = 59

        const result = bonAppetit(bill, k, b)

        expect(result).toEqual(12.5)
    })
})