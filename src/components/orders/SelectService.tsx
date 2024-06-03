import React from "react";

import SelectServiceForm from "./SelectServiceForm";
import FormContainer from "../base/formElements/FormContainer";

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
