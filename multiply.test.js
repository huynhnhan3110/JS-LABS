import { multiply } from "./multiply";
test("2 nhan ba bang 6", () => {
  expect(multiply(2, 3)).toBe(6);
});
test("5 nhan 6 bang 30", () => {
  expect(multiply(5, 6)).toBe(30);
});
