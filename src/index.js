import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
