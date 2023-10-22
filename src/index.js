import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./statestore/favorites-context"; // The curly braces make sure that we are not importing the default export.
import { ModeContextProvider } from "./statestore/mode-context";
import { MemoTimeContextProvider } from "./statestore/memotime-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MemoTimeContextProvider>
    <ModeContextProvider>
      <FavoritesContextProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </FavoritesContextProvider>
    </ModeContextProvider>
  </MemoTimeContextProvider>
);
