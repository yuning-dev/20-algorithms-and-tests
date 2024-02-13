exports.drawingBook = (n, p) => {
    let nToUse = 0
    
    if (Number.isInteger(n / 2)) {
        nToUse = n
    } else {
        nToUse = n - 1
    }

    let pToUse = 0
    if (Number.isInteger(p / 2)) {
        pToUse = p
    } else {
        pToUse = p - 1
    }

    let numPagesFromTheFront = pToUse / 2

    let numPagesFromTheBack = (nToUse - pToUse) / 2

    if (numPagesFromTheFront < numPagesFromTheBack) {
        return numPagesFromTheFront
    } else {
        return numPagesFromTheBack
    }
}