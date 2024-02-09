exports.createDifferentValuesArr = (arr) => {
    let difValuesArr = []
    let value = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value && !difValuesArr.find((item) => item === arr[i])) {
            value = arr[i]
            difValuesArr.push(value)
        }
    }
    return difValuesArr
}

exports.orderDifValuesArr = (difValuesArr) => {
    const orderedArray = difValuesArr.sort((a, b) => a - b)
    return orderedArray
}

exports.countSightings = (orderedArray, arr) => {
    let arrayOfSightings = []
    for (let i = 0; i < orderedArray.length; i++) {
        let counterArr = arr.filter((item) => item === orderedArray[i])
        arrayOfSightings.push(counterArr.length)
    }
    return arrayOfSightings
}

exports.findsHighestSighting = (arrayOfSightings) => {
    let highest = arrayOfSightings[0]
    for (let i = 0; i < arrayOfSightings.length; i++) {
        if (arrayOfSightings[i] > highest) {
            highest = arrayOfSightings[i]
        }
    }
    return highest
}

exports.countHowManyHighest(highest, arrayOfSightings) {
    let counterArr = arrayOfSightings.find((item) => item === highest)
    if (counterArr.length === 1) {
        return ...
    }

}
