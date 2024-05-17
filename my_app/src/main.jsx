// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// import { DataProvider } from "../src/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {/* <DataProvider> */}
    <ChakraProvider>
      <GlobalStyle />
      <App />
    </ChakraProvider>
    {/* </DataProvider> */}
  </Router>
);
