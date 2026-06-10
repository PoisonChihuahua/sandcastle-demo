import { describe, expect, test } from "vitest";
import { add, divide } from "./calculator";

describe("add", () => {
  test("returns sum of two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("handles negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("divide", () => {
  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("handles negative dividend", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("handles negative divisor", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("handles decimal result", () => {
    expect(divide(1, 3)).toBeCloseTo(0.333);
  });

  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});
