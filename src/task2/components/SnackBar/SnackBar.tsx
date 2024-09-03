import { FC } from "react";

import { Box, Snackbar, SnackbarContent, Typography } from "@mui/material";

import { IconCurrency } from "../IconCurrency/IconCurrency";

interface swapDetailsType {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}

interface SnackBarProps {
  showSnackbar: boolean;
  handleSnackbarClose: () => void;
  swapDetails: swapDetailsType;
  result: number | null;
}

export const SnackBar: FC<SnackBarProps> = ({
  showSnackbar,
  handleSnackbarClose,
  swapDetails,
  result,
}) => {
  return (
    <Snackbar
      open={showSnackbar}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <SnackbarContent
        message={
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              Swapped
            </Typography>
            <Typography variant="subtitle1" sx={{ mr: 0.5 }}>
              {swapDetails.amount}
            </Typography>
            <Box display="flex" alignItems="center" mr={1}>
              <IconCurrency icon={swapDetails.fromCurrency.toLowerCase()} />
              <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                {swapDetails.fromCurrency}
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              to
            </Typography>
            <Typography variant="subtitle1" sx={{ mr: 0.5 }}>
              {result?.toFixed(2)}
            </Typography>
            <Box display="flex" alignItems="center">
              <IconCurrency icon={swapDetails.toCurrency.toLowerCase()} />
              <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                {swapDetails.toCurrency}
              </Typography>
            </Box>
          </Box>
        }
        sx={{ backgroundColor: "#4caf50", color: "#fff" }}
      />
    </Snackbar>
  );
};
