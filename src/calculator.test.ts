import { describe, expect, test } from "vitest";
import { add, divide, power } from "./calculator";

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

describe("power", () => {
  test("raises base to positive exponent", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("exponent 0 returns 1", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("exponent 1 returns base", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("negative exponent returns reciprocal", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("handles base 0", () => {
    expect(power(0, 3)).toBe(0);
  });
});
