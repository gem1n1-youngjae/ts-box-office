import React from "react";
import { Header, Movies } from "./components";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header />
      <Movies />
    </>
  );
};

export default App;
