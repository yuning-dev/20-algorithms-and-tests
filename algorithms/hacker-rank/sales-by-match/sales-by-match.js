exports.createArrayOfDifferentIntegers = (n, ar) => {
    let differentIntegers = [ar[0]]
    let integer = ar[0]
    for (let i = 0; i < n; i++) {
        if (ar[i] !== integer && !differentIntegers.find((value) => value === ar[i])) {
            integer = ar[i]
            differentIntegers.push(ar[i])
        } 
    }
    return differentIntegers
}

exports.getsArrayOfNumberOfPairs = (n, ar, differentIntegers) => {
    let counter = 0
    let numPairsArray = []
    for (let i = 0; i < differentIntegers.length; i++) {
        for (let j = 0; j < n; j++) {
            if (ar[j] === differentIntegers[i]) {
                counter++
            }
            if (j === n - 1) {
                let numPairs = Math.floor(counter/2)
                numPairsArray.push(numPairs)
                counter = 0
            }
        }
    }
    return numPairsArray
}

exports.sumArray = (numPairsArray) => {
    let sum = 0
    for (let i = 0; i < numPairsArray.length; i++) {
        sum += numPairsArray[i]
    }
    return sum
}

exports.wholeFunction = (n, ar) => {
    return wholeFunc(n, ar)
}

function wholeFunc(n, ar) {
    const differentIntegers = createArrayOfDifferentIntegers(n, ar)
    const numPairsArray = getsArrayOfNumberOfPairs(n, ar, differentIntegers)
    return sumArray(numPairsArray)
}

function createArrayOfDifferentIntegers(n, ar) {
    let differentIntegers = [ar[0]]
    let integer = ar[0]
    for (let i = 0; i < n; i++) {
        if (ar[i] !== integer && !differentIntegers.find((value) => value === ar[i])) {
            integer = ar[i]
            differentIntegers.push(ar[i])
        } 
    }
    return differentIntegers
}

function getsArrayOfNumberOfPairs(n, ar, differentIntegers) {
    let counter = 0
    let numPairsArray = []
    for (let i = 0; i < differentIntegers.length; i++) {
        for (let j = 0; j < n; j++) {
            if (ar[j] === differentIntegers[i]) {
                counter++
            }
            if (j === n - 1) {
                let numPairs = Math.floor(counter/2)
                numPairsArray.push(numPairs)
                counter = 0
            }
        }
    }
    return numPairsArray
}

function sumArray(numPairsArray) {
    let sum = 0
    for (let i = 0; i < numPairsArray.length; i++) {
        sum += numPairsArray[i]
    }
    return sum
}