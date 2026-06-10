import { describe, expect, test } from "vitest";
import { add, divide, power } from "./calculator";

describe("add", () => {
  test("2つの正の数の合計を返す", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("負の数を処理する", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("divide", () => {
  test("2つの正の数を割る", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("負の被除数を処理する", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("負の除数を処理する", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("小数の結果を処理する", () => {
    expect(divide(1, 3)).toBeCloseTo(0.333);
  });

  test("ゼロ除算で例外をスローする", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});

describe("power", () => {
  test("正の指数で底をべき乗する", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("指数0は1を返す", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("指数1は底を返す", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("負の指数は逆数を返す", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("底が0の場合を処理する", () => {
    expect(power(0, 3)).toBe(0);
  });
});
