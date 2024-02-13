import { describe, test, expect } from 'vitest'

import { drawingBook } from './drawing-book'

describe('finds minimum number of pages to turn', () => {
    test('gets minumum number of pages to turn', () => {
        const n = 12
        const p = 5

        const result = drawingBook(n, p)

        expect(result).toEqual(2)
    })
    
})