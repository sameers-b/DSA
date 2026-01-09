function countNegatives(arr) {
  // implement your solution here
  if (!Array.isArray(arr)) return false
  if (arr.length == 0) return 0

  // -----------------------------------------------------------------------
  let count = 0
  for (let i of arr) {
    if (typeof i !== "number" || !Number.isFinite(i)) return false
    if (i < 0) count++
  }
  return count

  // -----------------------------------------------------------------------
  return arr.filter(x => x < 0).length

  // -----------------------------------------------------------------------
  return arr.reduce((c, x) => c + (x < 0 ? 1 : 0), 0)
}

module.exports = { countNegatives };