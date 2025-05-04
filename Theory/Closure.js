// A closure is a function that remembers its lexical scope even when executed outside it.

function counter() {
    let count = 0;
    return {
      increment: () => ++count,
      get: () => count
    };
  }
  const c = counter();
  c.increment(); // 1