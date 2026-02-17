function sumN(n) {
  // your solution here
  if (n < 0 || Number.isNaN(n) || !Number.isInteger(n))
    return false
  if (n == 0)
    return 0
  return n+sumN(n-1)
}

module.exports = { sumN };