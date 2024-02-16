exports.squareNumbers = (numbers) => {
    if (!numbers) {
        return undefined
    }
    return numbers.map(num => num * num)
}

exports.squareNumbers2 = (numbers) => {
    return numbers?.map(num => num * num)
}

exports.map = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result
}

exports.filter = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}