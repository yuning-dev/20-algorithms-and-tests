exports.mapArrayToObject = (arrayOfObjects) => {
    const obj = {}
    for (let i = 0 ; i < arrayOfObjects.length; i++) {
        let objId = arrayOfObjects[i].id
        obj[objId] = arrayOfObjects[i]
    }
    return obj
}

exports.mapArrayToObject2 = (arrayOfObjects) => {
    return Object.fromEntries(arrayOfObjects.map((obj) => [obj.id, obj]))
}

exports.sumNestedArrays = (obj) => {
    const arraysOfNumbers = Object
        .values(obj) // produces array of objects
        .map(subObj => subObj.arr) // array of arrays

    const sums = []

    for (let i = 0; i < 3; i++) {
        let sum = 0
        for (let j = 0; j < arraysOfNumbers.length; j++) {
            sum += arraysOfNumbers[j][i]
        }

        sums.push(sum)
    }

    return sums
}

// TODO - use reduce
exports.sumNestedArrays2 = (obj, arrayKey) => {
    const arraysOfNumbers = Object
        .values(obj) // produces array of objects
        .map(subObj => subObj[arrayKey]) // array of arrays

    const sums = []

    for (let i = 0; i < 3; i++) {
        let sum = 0
        for (let j = 0; j < arraysOfNumbers.length; j++) {
            sum += arraysOfNumbers[j][i]
        }

        sums.push(sum)
    }

    return sums
}