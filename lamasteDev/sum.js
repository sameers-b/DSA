function sum(...args) {
    // Your implementation
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum +=args[i];
    }
return sum
}

module.exports = sum



// second way
return args.reduce((sum, num)=>sum+num,0)