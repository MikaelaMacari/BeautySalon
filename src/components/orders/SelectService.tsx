import React from "react";

import Header from "./Header";
import SelectServiceForm from "./SelectServiceForm";
import FormContainer from "../formElements/FormContainer";

const SelectService: React.FC = () => {
  return (
    <>
      <FormContainer>
        <SelectServiceForm />
      </FormContainer>
    </>
  );
};
export default SelectService;
