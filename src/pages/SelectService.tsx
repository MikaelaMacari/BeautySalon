import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import PageContainer from "../components/layout/PageContainer";
const SelectService: React.FC = () => {
  const id = useParams();
  console.log(id);

  return (
    <div className="selectService">
      <Header />
      <PageContainer />
      Select Service
    </div>
  );
};

export default SelectService;
