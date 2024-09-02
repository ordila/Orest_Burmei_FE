export const sum_to_n_a = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

export const sum_to_n_b = (n: number): number =>
  n <= 0 ? 0 : (n * (n + 1)) / 2;

export const sum_to_n_c = (n: number): number =>
  n <= 0 ? 0 : n + sum_to_n_c(n - 1);
