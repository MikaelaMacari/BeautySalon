import React from "react";
import { StyledError } from "../../assets/styles/components/base/Error";
interface Error {
  errorMessage: string | undefined;
}
const Error = ({ errorMessage }: Error) => {
  return <StyledError>{errorMessage}</StyledError>;
};

export default Error;
