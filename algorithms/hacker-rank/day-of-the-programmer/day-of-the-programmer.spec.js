import { describe, test, expect } from 'vitest'
import { getDate } from './day-of-the-programmer'

describe('gets the date of the 256th day of the year in dd.mm.yyyy', () => {
    test('gets the date correctly when it is Julian calendar', () => {
        const julianLeapYear= 1740

        const result = getDate(julianLeapYear)

        expect(result).toEqual('12.09.1740')

        const julianNonLeapYear = 1833
        const result2 = getDate(julianNonLeapYear)
        expect(result2).toEqual('13.09.1833')
    }) 

    test('gets the date correctly when it is the Gregorian calendar', () => {
        const gregorianLeapYear = 1940
        const result = getDate(gregorianLeapYear)
        expect(result).toEqual('12.09.1940')

        const gregorianNonLeapYear = 2100
        const result2 = getDate(gregorianNonLeapYear)
        expect(result2).toEqual('13.09.2100')
    })

    test('gets the date correctly when it is 1918', () => {
        const year = 1918
        const result = getDate(year)
        expect(result).toEqual('26.09.1918')
    })
})