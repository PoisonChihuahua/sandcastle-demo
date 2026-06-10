import { describe, expect, test } from "vitest";
import { add } from "./calculator";

describe("add", () => {
  test("returns sum of two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("handles negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
