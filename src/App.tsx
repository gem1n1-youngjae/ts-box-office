import React, { useState } from "react";
import { Header, Movies } from "./components";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";

const App: React.FC = () => {
  const [date, setDate] = useState("");
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header setDate={setDate} />
      <Movies />
    </>
  );
};

export default App;
