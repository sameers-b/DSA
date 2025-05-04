Hoisting
// JavaScript's default behavior of moving declarations to the top of their containing scope
===
Lexical scope
// Lexical scope (static scope) means that variable accessibility is determined by their position in the source code
===
closure
// A closure is a function that remembers its lexical scope even when executed outside it.
===
Event Loop:
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

In global scope (outside any function), this refers to the global object:
Browser: window
Node.js: global