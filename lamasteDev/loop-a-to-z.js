function generateAtoZ() {
  // your solution here
  let count = 65;
  let arr = [];
  while (count < 91) {
    arr.push(String.fromCharCode(count))
    count++
  }
  return arr
}

module.exports = { generateAtoZ };