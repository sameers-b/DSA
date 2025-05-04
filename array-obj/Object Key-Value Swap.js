// Problem: Swap object keys and values.

function swapKeyValues(obj) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [value, key])
    );
  }
  
  console.log(swapKeyValues({a: 1, b: 2})); // {1: "a", 2: "b"}