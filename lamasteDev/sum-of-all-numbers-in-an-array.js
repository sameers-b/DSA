function sumArray(arr) {
  if (arr.length === 0) return 0
 return arr.reduce((curr,next)=>curr+next,0)
}

module.exports = { sumArray };
