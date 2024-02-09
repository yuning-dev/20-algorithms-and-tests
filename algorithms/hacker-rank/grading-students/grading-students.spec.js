import { test, describe, expect } from 'vitest'

import { gradingStudents } from './grading-students'

describe('gradingStudents', () => {
    test('grades < 38 are not rounded, if grades are > 38 do not round if the difference between the grade to the next multiple of 5 is 3 or larger, otherwise round to the next multiple of 5', () => {
        //Arrange
        const sampleGrades1 = [100, 28, 14, 40, 44, 57, 61, 88]

        //Action
        const roundedGrades1 = gradingStudents(sampleGrades1)

        //Assert
        expect(roundedGrades1).toEqual([100, 28, 14, 40, 45, 57, 61, 90])

        const sampleGrades2 = [2, 59, 56, 48, 60, 91, 18, 38, 0]
        const roundedGrades2 = gradingStudents(sampleGrades2)
        expect(roundedGrades2).toEqual([2, 60, 56, 50, 60, 91, 18, 40, 0])
    })

    // test('grades < 38 are not rounded, if grades are > 38 do not round if the difference between the grade to the next multiple of 5 is 3 or larger, otherwise round to the next multiple of 5', () => {
    //     const sampleGrades1 = [44, 84, 94, 21, 0, 18, 100]
    // })
})