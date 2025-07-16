Hoisting
// JavaScript's default behavior of moving declarations to the top of their containing scope.
// Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.
//  Only declarations are hoisted, not initializations.
===
Lexical scope
// Lexical scope (static scope) means that variable accessibility is determined by their position in the source code
===
closure
// A closure is a function that remembers its lexical scope even when executed outside it.
// A closure is a function that has access to its own scope, 
// the outer function's variables, and global variables - even after the outer function has returned.
===
Event Loop:
// JavaScript has a single-threaded so event loop give power handles asynchronous operations
// The coordinator between stack, queue, and Web APIs
===
call(), apply(), and bind() Methods
invokes a function with a specified this value and arguments provided individually
Purpose: Similar to call() but accepts arguments as an array
Purpose: Creates a new function with a specified this value and initial arguments

===
splice()
// Changes the contents of an array by removing/replacing existing elements and/or adding new elements in place
array.splice(startIndex, deleteCount, item1, item2, ...)

slice()
// slice() method extracts a section of an array/string and returns it as a new array/string, without modifying the original.
array.slice(startIndex, endIndex);

this
// In JavaScript, this is a special keyword that refers to the context in which a function 
// is executed. Its value depends on how a function is called, not where it's defined.

Q: Explain the difference between map(), filter(), and reduce() with examples.
// map() transforms each element and returns a new array:
// filter() returns elements that pass a condition:
// reduce() accumulates values to a single result:

// -----------------------------------------------------

Shallow vs Deep Copy
// Shallow copy (e.g., Object.assign(), spread operator) copies top-level only
// Deep copy (e.g., JSON.parse(JSON.stringify(obj))) copies all nested objects
// Use shallow for simple objects, deep when you need complete independence

Temporal Dead Zone
// the TDZ is the period between entering scope and a let or 
// const variable being declared where accessing the variable results in a ReferenceError.

Async/Await
// Async/await is a modern syntax for working with asynchronous operations in JavaScript 
// that makes asynchronous code look and behave more like synchronous code. 
// It's built on top of Promises but provides a more readable and maintainable way to handle asynchronous operations.

Authentication (Who Are You?)
Authorization (What Can You Do?)