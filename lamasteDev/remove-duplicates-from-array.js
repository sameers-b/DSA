function removeDuplicates(arr) {
  // your code here
  return [...new Set(arr)]

  // ---------------------------------------------
  let finalArr = []
  let tempArr = new Set()
  for (let i of arr) {
    if (!tempArr.has(i)) {
      tempArr.add(i)
      finalArr.push(i)
    }
  }
  return finalArr
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;
