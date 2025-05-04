// Question: Flatten a nested object with dot notation.


function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
      const pre = prefix ? `${prefix}.` : '';
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(acc, flattenObject(obj[key], pre + key));
      } else {
        acc[pre + key] = obj[key];
      }
      return acc;
    }, {});
  }
  
  // Example
  const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
  console.log(flattenObject(nested));
  // { "a": 1, "b.c": 2, "b.d.e": 3 }