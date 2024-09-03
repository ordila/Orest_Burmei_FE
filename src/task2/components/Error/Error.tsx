import React, { FC } from "react";

interface ErrorProps {
  errorTitle: string;
}

export const Error: FC<ErrorProps> = ({ errorTitle }) => {
  return (
    <p
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {errorTitle}
    </p>
  );
};
