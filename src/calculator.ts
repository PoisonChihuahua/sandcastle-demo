export function add(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function average(values: number[]): number {
  if (values.length === 0) throw new Error("Cannot average an empty array");
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}
