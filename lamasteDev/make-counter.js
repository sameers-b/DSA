function makeCounter(initialValue = 0) {
    // Your implementation
    let num = initialValue;
    return {
        increment: () => ++num,
        decrement: () => --num,
        reset: () => num = initialValue
    }
}

module.exports = makeCounter;