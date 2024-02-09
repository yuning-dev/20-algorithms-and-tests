exports.getHighestFrequency = (arr) => {
    let counter1 = (arr.filter((item) => item === 1)).length
    let counter2 = (arr.filter((item) => item === 2)).length
    let counter3 = (arr.filter((item) => item === 3)).length
    let counter4 = (arr.filter((item) => item === 4)).length
    let counter5 = (arr.filter((item) => item === 5)).length

    const countersArray = [counter1, counter2, counter3, counter4, counter5]

    let highestFrequency = counter1
    for (let i = 0; i < 5; i++) {
        if (countersArray[i] > highestFrequency) {
            highestFrequency = countersArray[i]
        }
    }
    return highestFrequency
}

exports.findsIdWithHighestFrequency = (countersArray, highestFrequency) => {
    return countersArray.indexOf(highestFrequency) + 1
}

exports.wholeFunc = (arr) => {
    let counter1 = (arr.filter((item) => item === 1)).length
    let counter2 = (arr.filter((item) => item === 2)).length
    let counter3 = (arr.filter((item) => item === 3)).length
    let counter4 = (arr.filter((item) => item === 4)).length
    let counter5 = (arr.filter((item) => item === 5)).length

    const countersArray = [counter1, counter2, counter3, counter4, counter5]

    let highestFrequency = counter1
    for (let i = 0; i < 5; i++) {
        if (countersArray[i] > highestFrequency) {
            highestFrequency = countersArray[i]
        }
    }
    return countersArray.indexOf(highestFrequency) + 1
}
