class Stack {
    constructor() {
        // Initialize your stack
        this.stackArr = []
    }

    push(element) {
        // Add element to the top
        this.stackArr.push(element)
        return this.stackArr.length
    }

    pop() {
        // Remove and return top element
        if (this.isEmpty()) return undefined
        return this.stackArr.pop()
    }

    peek() {
        // Return top element without removing
        if (this.isEmpty()) return undefined
        return this.stackArr[this.stackArr.length - 1]
    }

    isEmpty() {
        // Check if stack is empty
        return this.stackArr.length == 0
    }

    size() {
        // Return number of elements
        return this.stackArr.length
    }

    clear() {
        // Remove all elements
        this.stackArr = []
    }
}

module.exports = Stack;