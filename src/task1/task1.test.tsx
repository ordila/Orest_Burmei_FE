import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "./task1";

describe("sum_to_n functions", () => {
  test("sum_to_n_a should correctly sum numbers", () => {
    expect(sum_to_n_a(-1)).toBe(0);
    expect(sum_to_n_a(0)).toBe(0);
    expect(sum_to_n_a(1)).toBe(1);
    expect(sum_to_n_a(2)).toBe(3);
    expect(sum_to_n_a(5)).toBe(15);
    expect(sum_to_n_a(10)).toBe(55);
  });

  test("sum_to_n_b should correctly sum numbers  using the formula", () => {
    expect(sum_to_n_b(-1)).toBe(0);
    expect(sum_to_n_b(0)).toBe(0);
    expect(sum_to_n_b(1)).toBe(1);
    expect(sum_to_n_b(2)).toBe(3);
    expect(sum_to_n_b(5)).toBe(15);
    expect(sum_to_n_b(10)).toBe(55);
  });

  test("sum_to_n_c should correctly sum numbers  using recursion", () => {
    expect(sum_to_n_c(0)).toBe(0);
    expect(sum_to_n_c(-1)).toBe(0);
    expect(sum_to_n_c(1)).toBe(1);
    expect(sum_to_n_c(2)).toBe(3);
    expect(sum_to_n_c(5)).toBe(15);
    expect(sum_to_n_c(10)).toBe(55);
  });
});
