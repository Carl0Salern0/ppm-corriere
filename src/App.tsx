import React, { FunctionComponent, useState } from "react";
import { StyledApp } from "App.style";

import PageContainer from "./components/PageContainer";
import NavBar from "components/NavBar";

const App: FunctionComponent = () => {
  return (
    <StyledApp>
      <NavBar></NavBar>
      <PageContainer></PageContainer>
    </StyledApp>
  );
};

export default App;
