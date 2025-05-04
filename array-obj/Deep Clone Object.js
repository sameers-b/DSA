// Question: Create a deep clone of a nested object.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
    
    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  // Example
  const original = { a: 1, b: { c: 2 } };
  const cloned = deepClone(original);
  console.log(cloned); // { a: 1, b: { c: 2 } }
  console.log(cloned.b === original.b); // false