exports.birthday = (s, d, m) => {
    let arrayOfSubarrays = []
    for (let i = 0; i < s.length; i++) {
        let subArray = s.slice(i, i + m)
        if (subArray.length === m) {
            arrayOfSubarrays.push(subArray)        
        }
    }
    
    let subarraySums = []
    for (let i = 0; i < arrayOfSubarrays.length; i++) {
            let subarraySum = 0 
        for (let j = 0; j < m; j++) {
            subarraySum += arrayOfSubarrays[i][j]
        }
        subarraySums.push(subarraySum)
    }
  
    let counter = 0
    for (let i = 0; i < subarraySums.length; i++) {
        if (subarraySums[i] === d) {
            counter++
        }
    }
    return counter
}

exports.getSubarray = (s, m) => {
    let arrayOfSubarrays = []
    for (let i = 0; i < s.length; i++) {
        let subArray = s.slice(i, i + m)
        if (subArray.length === m) {
            arrayOfSubarrays.push(subArray)        
        }
    }
    return arrayOfSubarrays
}

exports.getSumsOfEachSubarray = (arrayOfSubarrays, m) => {
    let subarraySums = []
    for (let i = 0; i < arrayOfSubarrays.length; i++) {
            let subarraySum = 0 
        for (let j = 0; j < m; j++) {
            subarraySum += arrayOfSubarrays[i][j]
        }
        subarraySums.push(subarraySum)
    }
    return subarraySums
}

exports.getResult = (subarraySums, d) => {
    let counter = 0
    for (let i = 0; i < subarraySums.length; i++) {
        if (subarraySums[i] === d) {
            counter++
        }
    }
    return counter
}