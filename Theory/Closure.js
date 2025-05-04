// A closure is a function that remembers its lexical scope even when executed outside it.
// A closure is a function that has access to its own scope, the outer function's variables, 
// and global variables - even after the outer function has returned.

function counter() {
    let count = 0;
    return {
      increment: () => ++count,
      get: () => count
    };
  }
  const c = counter();
  c.increment(); // 1