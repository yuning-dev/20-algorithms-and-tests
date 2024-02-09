// let resultsMin = a[a.length - 1]
// let resultsRange = b[0] - resultsMin
// let resultsRangeArray = [resultsMin]

exports.findBiggest = (a) => {
    let biggest = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > biggest) {
            biggest = a[i]
        }
    }
    return biggest
}


exports.createResultsRangeArray = (a, b) => {
    let resultsMin = findBiggest(a)
    let resultsRange = findBiggest(b) - resultsMin
    let resultsRangeArray = [resultsMin]
    for (let i = 0; i < resultsRange; i++) {
        resultsMin += 1
        resultsRangeArray.push(resultsMin)
    }
    return resultsRangeArray
}

exports.findMultiplesOfA = (a, resultsRangeArray) => {
    let counter = 0
    let multiplesOfA = []
    for (let i = 0; i < resultsRangeArray.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (resultsRangeArray[i] % a[j] === 0) {
                counter++
                if (counter === a.length) {
                    multiplesOfA.push(resultsRangeArray[i])
                    counter = 0
                }
            } else {
                break
            }
        }
    }
    return multiplesOfA
}

exports.findNumbersBetweenAB = (b, multiplesOfA) => {
    let counter = 0
    let numbersBetweenAB = []
    for (let i = 0; i < multiplesOfA.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[j] % multiplesOfA[i] === 0) {
                counter++
                if (counter === b.length) {
                    numbersBetweenAB.push(multiplesOfA[i])
                    counter = 0
                }
            } else {
                break
            }
        }
    }
    console.log(numbersBetweenAB)
    return numbersBetweenAB.length
}

exports.getTotalX = (a, b) => {
    let resultsRangeArray = createResultsRangeArray(a, b)
    let multiplesOfA = findMultiplesOfA(a, resultsRangeArray)
    return findNumbersBetweenAB(b, multiplesOfA)
}

function createResultsRangeArray(a, b) {
    let resultsMin = findBiggest(a)
    let resultsRange = findBiggest(b) - resultsMin
    let resultsRangeArray = [resultsMin]
    for (let i = 0; i < resultsRange; i++) {
        resultsMin += 1
        resultsRangeArray.push(resultsMin)
    }
    return resultsRangeArray
}

function findMultiplesOfA(a, resultsRangeArray) {
    let counter = 0
    let multiplesOfA = []
    for (let i = 0; i < resultsRangeArray.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (resultsRangeArray[i] % a[j] === 0) {
                counter++
                if (counter === a.length) {
                    multiplesOfA.push(resultsRangeArray[i])
                    counter = 0
                }
            } else {
                break
            }
        }
    }
    return multiplesOfA
}

function findNumbersBetweenAB(b, multiplesOfA) {
    let counter = 0
    let numbersBetweenAB = []
    for (let i = 0; i < multiplesOfA.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[j] % multiplesOfA[i] === 0) {
                counter++
                if (counter === b.length) {
                    numbersBetweenAB.push(multiplesOfA[i])
                    counter = 0
                }
            }
        }
    }
    return numbersBetweenAB.length
}

function findBiggest(a) {
    let biggest = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > biggest) {
            biggest = a[i]
        }
    }
    return biggest
}