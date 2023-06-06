import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./Context/MainContext.jsx";
import { ScrollToTop } from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <ScrollToTop />
        <App />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
