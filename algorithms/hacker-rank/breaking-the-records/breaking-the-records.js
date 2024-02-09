function breakingRecords(scores) {
    let lowestScore = scores[0]
    let lowestCounter = 0
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < lowestScore) {
            lowestScore = scores[i]
            lowestCounter++
        }
    }
    let highestScore = scores[0]
    let highestCounter = 0
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            highestScore = scores[i]
            highestCounter++
        }
    }
    return [highestCounter, lowestCounter]
}