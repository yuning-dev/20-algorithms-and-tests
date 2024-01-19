const a = [1, 2, 3]
const b = [3, 2, 1]

exports.compareTriplets = (a, b) => {
    let scoreA = 0
    let scoreB = 0
    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            scoreB += 1
        }
        if (a[i] > b[i]) {
            scoreA += 1
        }
    }
    let resultArray = [scoreA, scoreB]
    return resultArray
}