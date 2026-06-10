import { describe, expect, test } from "vitest";
import { add, divide, power, average } from "./calculator";

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

describe("average", () => {
  test("正の数の配列の平均を返す", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test("単一要素の配列の平均を返す", () => {
    expect(average([7])).toBe(7);
  });

  test("負の数を含む配列を処理する", () => {
    expect(average([-3, -1, 0, 1, 3])).toBe(0);
  });

  test("小数を含む配列を処理する", () => {
    expect(average([0.1, 0.2, 0.3])).toBeCloseTo(0.2);
  });

  test("負数と小数が混在する配列を処理する", () => {
    expect(average([-1.5, 0.5, 2.0])).toBeCloseTo(0.333);
  });

  test("空配列の場合に例外をスローする", () => {
    expect(() => average([])).toThrow("Cannot average an empty array");
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
