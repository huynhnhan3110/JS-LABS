import { expect } from "@jest/globals";
import { sum } from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 14 + 2 to equal 16", () => {
  expect(sum(14, 2)).toBe(16);
});
