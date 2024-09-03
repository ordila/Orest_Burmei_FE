import * as Yup from "yup";

export const validationSchema = Yup.object({
  fromCurrency: Yup.string().required("Please select a source currency."),
  toCurrency: Yup.string().required("Please select a destination currency."),
  amount: Yup.number()
    .typeError("Please enter a valid amount.")
    .positive("Please enter an amount greater than 0.")
    .required("Please enter an amount."),
});
