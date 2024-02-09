exports.countDivisibleSumPairs = (n, k, ar) => {
    let sumPair = 0
    let counter = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            sumPair = ar[i] + ar[j]
            if (sumPair % k === 0) {
                counter++
            }
        }
    }
    return counter
}