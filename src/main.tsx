import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./assets/Fonts.css";

const fonts = {
  body: "Mont, sans-serif, mont",
  heading: "Mont, sans-serif, mont",
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.900", "#000")(props),
      color: mode("whiteAlpha.100", "whiteAlpha.600")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, fonts });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
