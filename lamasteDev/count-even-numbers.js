function countEvens(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false

  // ------------------------------------------
  let count = 0;
  for (let i of arr) {
    if (typeof i !== "number" || !Number.isFinite(i)) return false
    if (i % 2 == 0) count++
  }
  return count

  // ------------------------------------------
  return arr.filter(x => Number.isInteger(x) && x % 2 == 0).length

  // ------------------------------------------
  return arr.reduce((c, x) => c + (Number.isInteger(x) && x % 2 === 0 ? 1 : 0), 0)
}

module.exports = { countEvens }