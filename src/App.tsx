import React from 'react';
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./css/GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
