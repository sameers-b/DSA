function isPowerOfTwo(n) {

    //  Power of two must be a positive number
    if (n <= 0) return false;

    // 🔹 BITWISE METHOD (FASTEST)
    // A power of 2 has only ONE '1' in its binary form
    // Examples:
    // 1  -> 0001
    // 2  -> 0010
    // 4  -> 0100
    // 8  -> 1000
    //
    // When we do (n - 1), all bits AFTER the single '1'
    // become 1 and that '1' becomes 0
    //
    // Example:
    // n     = 8  -> 1000
    // n - 1 = 7  -> 0111
    //
    // AND operation:
    // 1000
    // 0111
    // ----
    // 0000  -> means power of two
    //
    // If result is 0 → only one '1' existed
    return (n & (n - 1)) === 0;


    // -------------------------------------------------------------
    // 🔹 DIVISION METHOD (SIMPLE BUT SLOWER)
    // Keep dividing by 2 while number is even
    while (n % 2 === 0) {
        n = n / 2;
    }

    // After dividing all 2s,
    // if we end with 1 → power of two
    return n === 1;
}

module.exports = { isPowerOfTwo };
