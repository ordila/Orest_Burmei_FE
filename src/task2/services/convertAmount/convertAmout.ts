import { Token } from "../getTokens/getTokens";

export const convertAmount = (
  tokens: Token[],
  fromCurrency: string,
  toCurrency: string,
  amount: number | ""
): number | null => {
  const fromPrice =
    tokens.find((token) => token.currency === fromCurrency)?.price || 0;
  const toPrice =
    tokens.find((token) => token.currency === toCurrency)?.price || 0;

  if (fromPrice && toPrice && amount !== "") {
    return (Number(amount) * fromPrice) / toPrice;
  }

  return null;
};
