exports.bonAppetit = (bill, k, b) => {
    let sumBill = 0
    for (let i= 0; i < bill.length; i++) {
        sumBill += bill[i]
    }
    let fairShare = (sumBill - bill[k]) / 2

    if (b === fairShare) {
        return ('Bon Appetit')
    } else {
        return (b - fairShare)
    }
}

// note: in the hacker-rank exercise, the requested output is console.log
// return is used here for testing purposes