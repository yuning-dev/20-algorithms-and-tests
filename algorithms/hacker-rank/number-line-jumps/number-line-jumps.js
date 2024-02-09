function kangaroo(x1, v1, x2, v2) {
    let counter = 0
    for (let i = 0; i < 10000; i++) {
        if ((x1 + i*v1) === (x2 + i*v2)) {
            counter = 1
        }
    }
    if (counter === 1) {
        return 'YES'
    } else {
        return 'NO'
    }
}