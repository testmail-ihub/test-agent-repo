export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export function divide(a, b) { if (b === 0) { throw new Error("Cannot divide by zero"); } return a / b; }
export function squareRoot(a) { if (a < 0) { throw new Error("Cannot calculate square root of negative number"); } return Math.sqrt(a); }
export function power(base, exponent) { return Math.pow(base, exponent); }
export function factorial(n) { if (n < 0) { throw new Error("Factorial is not defined for negative numbers"); } else if (n === 0 || n === 1) { return 1; } else { let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; } }