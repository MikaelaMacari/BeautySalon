import React from "react";
import Header from "../components/layout/Header";
import PageContainer from "../components/layout/PageContainer";
const Main: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <PageContainer />
      Home
    </div>
  );
};

export default Main;
