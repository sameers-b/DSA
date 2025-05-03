function groupBy(arr, key) {
    // Your implementation
    let newObj = {};
    for (let obj of arr) {
        if (newObj[obj[key]]) {
            newObj[obj[key]]=[...newObj[obj[key]],obj]
        } else {
            newObj[obj[key]]=[obj]
        }
    }
    return newObj
}

module.exports = groupBy;