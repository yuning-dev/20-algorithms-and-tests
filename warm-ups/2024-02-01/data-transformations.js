exports.squareNumbers = (arr) => {
    let squaredArray = []
    let value = 1
    for (let i = 0; i < arr.length; i++) {
        value = arr[i] * arr[i]
        squaredArray.push(value)
    }
    return squaredArray
}

exports.squareNumbers2 = (arr) => {
    let squaredArray = []
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i])
    }
    return squaredArray
}

exports.squareNumbers3 = (numbers) => {
    return numbers.map((num) => num * num)
}

exports.getKeysFromObj = (obj) => {
    return Object.keys(obj)
}

exports.getFunKeysFromObj = (obj) => {
    return Object
        .keys(obj)
        .map((key) => 'fun' + key)
}
