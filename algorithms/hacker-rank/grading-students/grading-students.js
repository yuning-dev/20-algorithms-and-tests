exports.gradingStudents = (grades) => {
    let roundedGrades = []
    let multipleOf5 = 35
    let multiplesOf5Array = []
    for (let i = 0; i < 13; i++) {
        multipleOf5 += 5
        multiplesOf5Array.push(multipleOf5)
    }
    let currentGrade = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            roundedGrades.push(grades[i])
        } else {
            currentGrade = grades[i]
            let smallestMultipleBiggerThanGrade = 0
            for (let i = 0; i < multiplesOf5Array.length; i++) {
                if (multiplesOf5Array[i] >= currentGrade) {
                    smallestMultipleBiggerThanGrade = multiplesOf5Array[i] 
                    break
                }
            }
            if ((smallestMultipleBiggerThanGrade - currentGrade) < 3) {
                roundedGrades.push(smallestMultipleBiggerThanGrade)
            } else {
                roundedGrades.push(currentGrade)
            }
        }
    }
    return roundedGrades
}