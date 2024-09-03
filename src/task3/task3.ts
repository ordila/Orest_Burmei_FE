export {}; //to avoid TypeScript error TS1208

// import React, { useMemo } from "react";
// import { BoxProps } from "@mui/material";
// import WalletRow from "./WalletRow";
// import { useWalletBalances, usePrices } from "../../services";

// Interface for wallet balance
// interface WalletBalance {
//   currency: string;
//   amount: number;
//   blockchain: string;
// }

// Interface for component props extending BoxProps from MUI
// interface Props extends BoxProps {}

// WalletPage component
// const WalletPage: React.FC<Props> = (props: Props) => {
//   const { children, ...rest } = props;
//   const balances = useWalletBalances();
//   const prices = usePrices();

//      Memoize priority mapping
//   const getPriority = useMemo(() => {
//     const priorityMap: Record<string, number> = {
//       Osmosis: 100,
//       Ethereum: 50,
//       Arbitrum: 30,
//       Zilliqa: 20,
//       Neo: 20,
//     };

//     return (blockchain: string): number => priorityMap[blockchain] ?? -99;
//   }, []);

//   // Memoize sorted balances
//   const sortedBalances = useMemo(() => {
//     return balances
//       .filter((balance: WalletBalance) => {
//         const balancePriority = getPriority(balance.blockchain);
//         return balancePriority > -99 && balance.amount > 0;
//       })
//       .sort((lhs: WalletBalance, rhs: WalletBalance) => {
//         const leftPriority = getPriority(lhs.blockchain);
//         const rightPriority = getPriority(rhs.blockchain);
//         return rightPriority - leftPriority; // Higher priority first
//       });
//   }, [balances, getPriority]);

//    Combine formatting and mapping to rows
//   const rows = sortedBalances.map((balance: WalletBalance) => {
//     const formattedAmount = balance.amount.toFixed(2);
//     const usdValue = prices[balance.currency] * balance.amount;

//     return (
//       <WalletRow
//         className="row" // Assuming className is used here
//         key={balance.currency} // Use currency as a unique key
//         amount={balance.amount}
//         usdValue={usdValue}
//         formattedAmount={formattedAmount}
//       />
//     );
//   });

//   return <div {...rest}>{rows}</div>;
// };

// export default WalletPage;
