import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import "@fontsource/noto-sans";
import "@fontsource-variable/inter";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { SocketProvider } from "./components/SocketContext.jsx";
const serverUrl = "http://localhost:3001";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SocketProvider serverUrl={serverUrl}>
          <App />
        </SocketProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
