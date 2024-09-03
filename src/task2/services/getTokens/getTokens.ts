export interface Token {
  currency: string;
  date?: string;
  price: number;
}

export const getTokens = async (): Promise<Token[]> => {
  try {
    const response = await fetch("https://interview.switcheo.com/prices.json");
    const data: Token[] = await response.json();

    const uniqueTokens = data.reduce((acc: Token[], current: Token) => {
      const existingToken = acc.find(
        (token) => token.currency === current.currency
      );
      if (!existingToken) {
        acc.push(current);
      }
      return acc;
    }, []);

    return uniqueTokens;
  } catch (error) {
    console.error("Error fetching token prices:", error);
    throw error;
  }
};
