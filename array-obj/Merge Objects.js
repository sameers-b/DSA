// Question: Deep merge two objects.

function deepMerge(target, source) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null) {
          if (!target[key]) target[key] = Array.isArray(source[key]) ? [] : {};
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  
  // Example
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 }, e: 4 };
  console.log(deepMerge(obj1, obj2)); // { a: 1, b: { c: 2, d: 3 }, e: 4 }