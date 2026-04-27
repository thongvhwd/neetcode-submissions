class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operations = new Set(["+", "-", "*", "/"]);
        tokens.forEach((token) => {
            if (!operations.has(token)) {
                stack.push(+token);
            } else {
                const second = stack.pop();
                const first = stack.pop();
                const operators = {
                    "+": (a, b) => a + b,
                    "-": (a, b) => a - b,
                    "*": (a, b) => a * b,
                    "/": (a, b) => a / b,
                };
                stack.push(Math.trunc(operators[token](first, second)));
            }
        });
        return stack[0];
    }
}
