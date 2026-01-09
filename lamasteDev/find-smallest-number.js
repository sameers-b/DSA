function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false
  if (arr.length == 0) return null

  // ---------------------------------
  // arr.sort((a,b)=>a-b);
  // return arr[0]

  // ---------------------------------
  let min;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false

    if (min === undefined || value < min) min = value
  }
  return min

  // ---------------------------------
  // return arr.reduce((m,x)=>(x<m?x:m),arr[0])

  // ---------------------------------
  // return arr.length===0?null:Math.min(...arr)


}

module.exports = { findSmallest };