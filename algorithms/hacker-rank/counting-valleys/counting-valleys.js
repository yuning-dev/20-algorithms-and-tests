exports.translatesToNumbers = (steps, path) => {
    let stepsWithHeight = []
    for (let i = 0 ; i < steps; i++) {
        if (path[i] == "U") {
            stepsWithHeight.push(1)
        } else {
            stepsWithHeight.push(-1)
        }
    }
    return stepsWithHeight
}

exports.tracksHeight = (stepsWithHeight) => {
    let counter = 0
    let heightValues = []
    for (let i = 0; i < stepsWithHeight.length; i++) {
        counter += stepsWithHeight[i]
        heightValues.push(counter)
    }
    return heightValues
}

exports.countsValleys = (heightValues) => {
    let indexForZeros = []
    for (let i = 0; i < heightValues.length; i++) {
        if (heightValues[i] === 0) {
            indexForZeros.push(i)
        }
    }
    let valleyCounter = 0
    for (let i = 0; i < indexForZeros.length; i++) {
        for (let j = 0; j < heightValues.length; j++) {
            if (j === (indexForZeros[i] + 1) && heightValues[j] === -1) {
                valleyCounter++
            }
        }
    }
    if (heightValues[0] === -1) {
        valleyCounter += 1
    }
    return valleyCounter
}

exports.wholeFunc = (steps, path) => {
    return wholeFunction(steps, path)
}

function wholeFunction(steps, path) {
    let stepsWithHeight = translatesToNumbers(steps, path)
    let heightValues = tracksHeight(stepsWithHeight)
    return countsValleys(heightValues)
}

function translatesToNumbers(steps, path) {
    let stepsWithHeight = []
    for (let i = 0 ; i < steps; i++) {
        if (path[i] == "U") {
            stepsWithHeight.push(1)
        } else {
            stepsWithHeight.push(-1)
        }
    }
    return stepsWithHeight
}

function tracksHeight(stepsWithHeight) {
    let counter = 0
    let heightValues = []
    for (let i = 0; i < stepsWithHeight.length; i++) {
        counter += stepsWithHeight[i]
        heightValues.push(counter)
    }
    return heightValues
}

function countsValleys(heightValues) {
    let indexForZeros = []
    for (let i = 0; i < heightValues.length; i++) {
        if (heightValues[i] === 0) {
            indexForZeros.push(i)
        }
    }
    let valleyCounter = 0
    for (let i = 0; i < indexForZeros.length; i++) {
        for (let j = 0; j < heightValues.length; j++) {
            if (j === (indexForZeros[i] + 1) && heightValues[j] === -1) {
                valleyCounter++
            }
        }
    }
    if (heightValues[0] === -1) {
        valleyCounter += 1
    }
    return valleyCounter
}

exports.optimisedFunc = (steps, path) => {
    let counter = 0
    let heightValues = []
    for (let i = 0 ; i < steps; i++) {
        if (path[i] == "U") {
            counter += 1
            heightValues.push(counter)
        } else {
            counter += -1
            heightValues.push(counter)
        }
    }

    let indexForZero = []
    for (let i = 0; i < heightValues.length; i++) {
        if (heightValues[i] === 0) {
            indexForZero.push(i)
        }
    }
    let valleyCounter = 0
    for (let i = 0; i < indexForZero.length; i++) {
        if (heightValues[indexForZero[i] + 1] === -1) {
            valleyCounter +=1
        }    
    }
    if (heightValues[0] === -1) {
        valleyCounter += 1
    }
    return valleyCounter
    
}