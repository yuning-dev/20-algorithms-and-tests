exports.getDate = (y) => {
    let julian = 0
    let year1918 = 0
    let gregorian = 0
    if (y < 1918) {
        julian += 1
    } else if (y === 1918) {
        year1918 += 1
    } else {
        gregorian += 1
    }

    if (julian === 1) {
        if (y % 4 === 0) {
            return '12.09.' + y
        } else {
            return '13.09.' + y
        }
    }
    if (year1918 === 1) {
        return '26.09.1918'
    }
    if (gregorian === 1) {
        if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
            return '12.09.' + y
        } else {
            return '13.09.' + y
        }
    }
}