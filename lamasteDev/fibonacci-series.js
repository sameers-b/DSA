function generateFibonacci(n) {
    if (n <= 0)
        return []

    if (n == 1)
        return [0]

    let arr = [0, 1]

    for (let i = 1; i < n - 1; i++) {
        arr[i + 1] = arr[i] + arr[i - 1]
    }
    return arr
}

module.exports = { generateFibonacci };
