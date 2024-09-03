import React, { useEffect, useState } from "react";

import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";

import { Formik, Form, Field } from "formik";

import { CurrencySelect, SnackBar, Error } from "../";

import {
  getTokens,
  Token,
  convertAmount,
  validationSchema,
} from "../../services";

const CurrencySwapForm: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [swapDetails, setSwapDetails] = useState({
    fromCurrency: "",
    toCurrency: "",
    amount: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const tokensData = await getTokens();
        setTokens(tokensData);
      } catch (error) {
        setError("Failed to fetch token prices. Please try again later.");
      }
    };

    fetchTokens();
  }, []);

  const handleSubmit = async (values: any) => {
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const result = convertAmount(
        tokens,
        values.fromCurrency,
        values.toCurrency,
        values.amount
      );

      if (result !== null) {
        setResult(result);
        setSwapDetails({
          fromCurrency: values.fromCurrency,
          toCurrency: values.toCurrency,
          amount: values.amount,
        });

        setShowSnackbar(true);
      }

      setLoading(false);
    }, 1000);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  if (error) {
    return <Error errorTitle={error} />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fancy Form
      </Typography>

      <Formik
        initialValues={{ fromCurrency: "", toCurrency: "", amount: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <Box mb={2}>
              <CurrencySelect
                id="fromCurrency"
                label="Currency to send"
                value={values.fromCurrency}
                onChange={(e) => setFieldValue("fromCurrency", e.target.value)}
                error={touched.fromCurrency && Boolean(errors.fromCurrency)}
                helperText={touched.fromCurrency ? errors.fromCurrency : ""}
                currencies={tokens.map((token) => ({
                  value: token.currency,
                  label: token.currency,
                  icon: token.currency.toLowerCase(),
                }))}
              />
            </Box>

            <Box mb={2}>
              <CurrencySelect
                id="toCurrency"
                label="Currency to receive"
                value={values.toCurrency}
                onChange={(e) => setFieldValue("toCurrency", e.target.value)}
                error={touched.toCurrency && Boolean(errors.toCurrency)}
                helperText={touched.toCurrency ? errors.toCurrency : ""}
                currencies={tokens.map((token) => ({
                  value: token.currency,
                  label: token.currency,
                  icon: token.currency.toLowerCase(),
                }))}
              />
            </Box>

            <Box mb={2}>
              <Field name="amount">
                {({ field, meta }: any) => (
                  <TextField
                    {...field}
                    type="number"
                    label="Amount"
                    fullWidth
                    variant="outlined"
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ height: "55px" }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "CONFIRM SWAP"
              )}
            </Button>

            {result !== null && (
              <Box mt={2}>
                <Typography variant="h6">
                  Converted Amount: {result.toFixed(2)}
                </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
      <SnackBar
        showSnackbar={showSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        swapDetails={swapDetails}
        result={result}
      />
    </Container>
  );
};

export default CurrencySwapForm;
