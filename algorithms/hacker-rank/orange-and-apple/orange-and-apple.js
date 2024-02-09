function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesPosition = []
    for (let i = 0; i < apples.length; i++) {
        let applePosition = apples[i] + a
        applesPosition.push(applePosition)
    }
    let applesCounter = 0
    for (let i = 0; i < applesPosition.length; i++) {
        if (s <= applesPosition[i] && applesPosition[i] <= t) {
            applesCounter += 1
        }
    }
    let orangesPosition = []
    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = oranges[i] + b
        orangesPosition.push(orangePosition)
    }
    let orangesCounter = 0
    for (let i = 0; i < orangesPosition.length; i++) {
        if (s <= orangesPosition[i] && orangesPosition[i] <= t) {
            orangesCounter += 1
        }
    }
    console.log(applesCounter)
    console.log(orangesCounter)
}