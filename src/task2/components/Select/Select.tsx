import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { IconCurrency } from "../IconCurrency/IconCurrency";

interface CurrencySelectProps {
  value: string;
  onChange: (event: any) => void;
  currencies: { value: string; label: string; icon: string }[];
  error?: boolean;
  helperText?: string;
  id: string;
  label: string;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  currencies,
  error = false,
  helperText = "",
  id,
  label = "",
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
        label={label}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          PaperProps: {
            style: {
              maxHeight: 200,
            },
          },
        }}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency.value} value={currency.value}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconCurrency icon={currency.icon} style={{ marginRight: 8 }} />
              {currency.label}
            </div>
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
